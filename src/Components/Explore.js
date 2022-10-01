import { useState, useEffect } from 'react';
import CalendarComp from './CalendarComp'
import axios from 'axios';
import MenuComp from './MenuComp';

const url = 'https://menuvox.fr:8080';

function getMenusDate(date) {
	const menus = [];
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

function getMenus(menus) {
	return new Promise(resolve => {
		axios.post(`${url}/menus`, { 'pc': true, 'days': menus }).catch(err => {
			console.log(err);
			resolve(null);
		}).then(response => {
			if (typeof response == 'undefined') {
				resolve(null);
			} else {
				let data = response.data.data;
				data = data.map(d => {
					const temp = d.data?.date?.split('/');
					if (typeof temp == 'undefined') return d;
					d.data.day = parseInt(temp[0]);
					d.data.month = parseInt(temp[1] - 1);
					d.data.year = parseInt(temp[2]);
					return d;
				});
				resolve(data);
			}
		});
	});
}

function Explore({ theme }) {
	const [menu, setMenu] = useState(
		<div className="ExploreHeaderBox">
			<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
				Récupération des menus en cours...
			</div>
		</div>
	);


	useEffect(() => {
		function getMenu(date) {
			getMenus(getMenusDate(date)).then(data => {
				const datas = [];
				data.forEach(d => {
					if (!d?.error) {
						datas.push(d.data);
					}
				})
				if (!datas.length) {
					setMenu(
						<div className="ExploreHeaderBox">
							<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
								Aucun menu à afficher
							</div>
							<CalendarComp oldDate={date} callback={getMenu} theme={theme} />
						</div>
					);
					return;
				}

				const Months = ['Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre'];
				if (date.getDay() === 6) {
					date.setDate(date.getDate() + 2);
				}
				if (date.getDay() === 0) {
					date.setDate(date.getDate() + 1);
				}

				const date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4);
				setMenu(
					<div>
						<div className='ExploreHeaderBox'>
							<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
								{date.getDate()} {Months[date.getMonth() + 1]} au {date2.getDate()} {Months[date2.getMonth() + 1]}
							</div>
							<CalendarComp oldDate={date} callback={getMenu} theme={theme} />
						</div>
						<MenuComp data={datas} theme={theme} />
					</div>

				);
			})
			setMenu(
				<div className="ExploreHeaderBox">
					<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
						Chargement du {date.toLocaleDateString()}...
					</div>
					<CalendarComp oldDate={date} callback={getMenu} theme={theme} />
				</div>
			)
		}
		getMenu(new Date())
	}, [theme]);

	return menu;
}




export default Explore;