import { useState, useEffect } from 'react';
import axios from 'axios';

import MenuComp from './MenuComp';

const url = 'https://menuvox.fr:8080';

function getMenusDate() {
	const menus: Array<any> = [];
	let date = new Date();
	let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	let date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
	let date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
	let date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
	switch (date.getDay()) {
		case 1:
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		case 2:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		case 3:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 2);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		case 4:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		case 5:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 4);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		case 6:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;

		default:
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
			date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
			date3 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate() + 1);
			date4 = new Date(date3.getFullYear(), date3.getMonth(), date3.getDate() + 1);
			menus.push({ 'month': date.getMonth() + 1, 'day': date.getDate() });
			menus.push({ 'month': date1.getMonth() + 1, 'day': date1.getDate() });
			menus.push({ 'month': date2.getMonth() + 1, 'day': date2.getDate() });
			menus.push({ 'month': date3.getMonth() + 1, 'day': date3.getDate() });
			menus.push({ 'month': date4.getMonth() + 1, 'day': date4.getDate() });
			break;
	}
	return menus;
}

function getMenus(menus: Array<any>) {
	return new Promise(resolve => {
		axios.post(`${url}/menus`, { 'pc': true, 'days': menus }).catch(err => {
			console.error(err);
			resolve(null);
		}).then(response => {
			if (typeof response == 'undefined') {
				resolve(null);
			} else {
				let data = response.data.data;
				data = data.map((d: any) => {
					const temp = d.data?.date?.split('/');
					if (typeof temp == 'undefined') return d;
					d.data.day = parseInt(temp[0]);
					d.data.month = temp[1] - 1;
					d.data.year = parseInt(temp[2]);
					return d;
				});
				resolve(data);
			}
		});
	});
}

function Menu({ theme }) {
	const [menu, setMenu] = useState(
		<div className="MenuWaiting">
			<div className={theme === 'dark' ? 'WaitingError WaitingErrorDark' : "WaitingError"}>
				Récupération des menus en cours...
			</div>
		</div>
	);

	useEffect(() => {
		const cache = JSON.parse(sessionStorage.getItem('menuCache') as string);
		if (cache) {
			if (!cache.length) {
				if (new Date().getDay() === 6 || new Date().getDay() === 0) {
					setMenu(
						<div className="MenuWaiting">
							<div className="WaitingError">
								Bon week-end !
							</div>
						</div>
					);
					return;
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
			setMenu(<MenuComp data={cache} theme={theme} />);
			return;
		}

		getMenus(getMenusDate()).then((data: any) => {
			const datas: Array<any> = [];
			data.forEach((d: any) => {
				if (!d?.error) {
					datas.push(d.data);
				}
			});
			sessionStorage.setItem('menuCache', JSON.stringify(datas));
			if (!datas.length) {
				if (new Date().getDay() === 6 || new Date().getDay() === 0) {
					setMenu(
						<div className="MenuWaiting">
							<div className="WaitingError">
								Bon week-end !
							</div>
						</div>
					);
					return;
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
			setMenu(<MenuComp data={datas} theme={theme} />);
		})
	}, [theme]);

	return (
		<div className={theme === 'dark' ? 'Main MainDark' : "Main"}>
			{menu}
		</div>
	);
}

export default Menu;