/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';
import axios from 'axios';

import MenuComp from './MenuComp';

const url = 'https://menuvox.fr:8080';

function getMenusDate() {
	const menus = [];
	const date = new Date();
	const date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	const date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
	const date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
	const date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
	switch (date.getDay()) {
		case 1:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate()));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate()));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate()));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate()));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate()));
			break;

		case 2:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() - 1));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() - 1));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() - 1));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() - 1));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() - 1));
			break;

		case 3:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() - 2));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() - 2));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() - 2));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() - 2));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() - 2));
			break;

		case 4:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() - 3));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() - 3));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() - 3));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() - 3));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() - 3));
			break;

		case 5:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() - 4));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() - 4));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() - 4));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() - 4));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() - 4));
			break;

		case 6:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() + 2));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() + 2));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() + 2));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() + 2));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() + 2));
			break;

		default:
			menus.push(getMenu(date.getFullYear(), date.getMonth(), date.getDate() + 1));
			menus.push(getMenu(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1));
			menus.push(getMenu(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1));
			menus.push(getMenu(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1));
			menus.push(getMenu(date4.getFullYear(), date4.getMonth(), date4.getDate() + 1));
			break;
	}
	return menus;
}

function getMenu(year, month, day) {
	return new Promise(resolve => {
		axios.get(`${url}/menus/${month + 1}/${day}`).catch(err => {
			console.log(err);
			resolve(null);
		}).then(response => {
			if (typeof response == 'undefined') {
				resolve(null);
			} else {
				const data = response.data.data;
				data.year = year;
				data.month = month;
				data.day = day;
				resolve(data);
			}
		});
	});
}

function Menu({ theme }) {
	const [menu, setMenu] = useState(
		<div className="MenuWaiting">
			<div className="WaitingError">
				Récupération des menus en cours...
			</div>
		</div>
	);

	useEffect(() => {
		const cache = JSON.parse(sessionStorage.getItem('menuCache'));
		if (cache) {
			if (!cache.length) {
				if (new Date().getDay() == 6 || new Date().getDay() == 0) {
					cache.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
				} else {
					setMenu(
						<div className="MenuWaiting">
							<div className="WaitingError">
								Aucun menu à afficher
							</div>
						</div>
					);
					return;
				}
			}
			setMenu(<MenuComp data={cache} />);
			return;
		}

		Promise.all(getMenusDate()).then(data => {
			const datas = [];
			data.forEach(d => {
				if (d) {
					datas.push(d);
				}
			})
			sessionStorage.setItem('menuCache', JSON.stringify(datas));
			if (!datas.length) {
				if (new Date().getDay() == 6 || new Date().getDay() == 0) {
					datas.push({ error: 1, errorMessage: 'Bon week-end !', errorEvening: 1, date: new Date().getDate().toString() });
				} else {
					setMenu(
						<div className="MenuWaiting">
							<div className="WaitingError">
								Aucun menu à afficher
							</div>
						</div>
					);
					return;
				}
			}
			setMenu(<MenuComp data={datas} />);
		})
	}, [theme])
	return (
		<div className='Main'>
			{menu}
		</div>
	);
}

export default Menu;