import { useState, useEffect } from 'react';
import CalendarComp from './CalendarComp'
import axios from 'axios';
import MenuComp from './MenuComp';

const url = 'https://menuvox.fr:8080';

function getMenusDate(date: Date) {
	const menus: Array<any> = [];
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
	const datas: Array<any> = [];
	let cache: Array<any> = JSON.parse(window.sessionStorage.getItem('cache') as string);
	if (cache === null) cache = [];
	const Menus: Array<any> = [];
	menus.forEach((data: any) => {
		const result = cache.find(v => {
			v.data.month++;
			if (v.data.month === data.month && v.data.day === data.day) {
				return true;
			}
			return false;
		});
		if (typeof result == 'undefined') {
			Menus.push(data);
		} else {
			datas.push(result);
		}
	});

	if (!Menus.length) return new Promise(r => r(datas));

	return new Promise(resolve => {
		axios.post(`${url}/menus`, { 'pc': true, 'days': Menus }).catch(err => {
			console.error(err);
			resolve(null);
		}).then(response => {
			if (typeof response == 'undefined') {
				resolve(null);
			} else {
				const data: Array<any> = response.data.data;
				data.forEach((d: any) => {
					const temp = d.data?.date?.split('/');
					if (typeof temp != 'undefined') {
						d.data.day = parseInt(temp[0]);
						d.data.month = temp[1] - 1;
						d.data.year = parseInt(temp[2]);
					}
					datas.push(d);
				});
				resolve(datas);
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
		function getMenu(date: Date) {
			getMenus(getMenusDate(date)).then((data: any) => {
				const datas: Array<any> = [];
				data.forEach((d: any) => {
					if (!d?.error) {
						datas.push(d.data);
					}
				});
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

				const Months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

				if (date.getDay() === 2) {
					date.setDate(date.getDate() - 1);
				} else if (date.getDay() === 3) {
					date.setDate(date.getDate() - 2);
				} else if (date.getDay() === 4) {
					date.setDate(date.getDate() - 3);
				} else if (date.getDay() === 5) {
					date.setDate(date.getDate() - 4);
				} else if (date.getDay() === 6) {
					date.setDate(date.getDate() + 2);
				} else if (date.getDay() === 0) {
					date.setDate(date.getDate() + 1);
				}

				const date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4);
				setMenu(
					<div>
						<div className='ExploreHeaderBox'>
							<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
								{date.getDate()} {Months[date.getMonth()]} au {date2.getDate()} {Months[date2.getMonth()]}
							</div>
							<CalendarComp oldDate={date} callback={getMenu} theme={theme} />
						</div>
						<MenuComp data={datas} theme={theme} />
					</div>
				);

				let cache: Array<any> = JSON.parse(window.sessionStorage.getItem('cache') as string);
				if (cache === null) cache = [];
				datas.forEach((data: any) => {
					const result = cache.find(v => v.data.date === data.date);
					if (typeof result == 'undefined') {
						cache.push({ error: 0, data: data });
					}
				});
				window.sessionStorage.setItem('cache', JSON.stringify(cache));
			});
			setMenu(
				<div className="ExploreHeaderBox">
					<div className={theme === 'dark' ? 'ExploreTitle ExploreTitleDark' : "ExploreTitle"}>
						Récupération des menus en cours...
					</div>
					<CalendarComp oldDate={date} callback={getMenu} theme={theme} />
				</div>
			);
		}
		getMenu(new Date());
	}, [theme]);

	return menu;
}




export default Explore;