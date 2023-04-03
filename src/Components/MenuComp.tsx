import Dish from './Dish';

function getDate(date: string) {
	let d = date.split('/');
	const MenuDate = new Date(parseInt(d[2]), parseInt(d[1]) - 1, parseInt(d[0]));

	if (MenuDate.getDay() === 1) {
		return 'Lundi';
	} else if (MenuDate.getDay() === 2) {
		return 'Mardi';
	} else if (MenuDate.getDay() === 3) {
		return 'Mercredi';
	} else if (MenuDate.getDay() === 4) {
		return 'Jeudi';
	} else if (MenuDate.getDay() === 5) {
		return 'Vendredi';
	} else {
		return 'Menu du ' + date;
	}
}

function getDateEvening(date: string) {
	let d = date.split('/');
	const MenuDate = new Date(parseInt(d[2]), parseInt(d[1]) - 1, parseInt(d[0]));

	if (MenuDate.getDay() === 1) {
		return 'Lundi soir';
	} else if (MenuDate.getDay() === 2) {
		return 'Mardi soir';
	} else if (MenuDate.getDay() === 3) {
		return 'Mercredi soir';
	} else if (MenuDate.getDay() === 4) {
		return 'Jeudi soir';
	} else {
		return 'Menu du ' + date + ' au soir';
	}
}

function MenuComp({ data, theme }) {
	const menus: Array<any> = [];
	const menusEvening: Array<any> = [];

	const isEvening = JSON.parse(window.localStorage.getItem('evening') as string);

	data.forEach((menu: any, i: number) => {
		let Class = 'MenuAnimated' + i + ' Menu';
		const date = new Date(menu.date.substring(6, 10), menu.date.substring(3, 5) - 1, menu.date.substring(0, 2));
		const now = new Date();
		if (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() > date.getTime()) {
			Class += ' MenuPasted';
		}

		if (menu.error) {
			if (menu.errorMessage) {
				menus.push(
					<div className={Class} key={i}>
						{getDate(menu.date)}
						<div className='MenuContent'>
							{menu.errorMessage}
						</div>
					</div>
				);
			}
		} else {
			menus.push(
				<div className={Class} key={i}>
					{getDate(menu.date)}
					<div className='MenuContent'>
						{menu.menu?.map((dish: any, i: number) => {
							return <Dish data={dish} key={i} theme={theme} />;
						})}
					</div>
				</div>
			);
		}
		if (isEvening) {
			let Class = 'MenuAnimated' + i + ' Menu';
			const date = new Date(menu.date.substring(6, 10), menu.date.substring(3, 5) - 1, menu.date.substring(0, 2))
			const now = new Date();
			if (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() > date.getTime()) {
				Class += ' MenuPasted';
			}
			if (menu.errorEvening) {
				if (menu.errorEveningMessage) {
					menusEvening.push(
						<div className={Class} key={i}>
							{getDate(menu.date)}
							<div className='MenuContent'>
								{menu.errorEveningMessage}
							</div>
						</div>
					);
				}
			} else {
				const dishsEven: Array<any> = [];
				menu.evening?.forEach((dish: any, i: number) => {
					dishsEven.push(<Dish data={dish} key={i} theme={theme} />);
				})
				if (!dishsEven.length) return;
				menusEvening.push(
					<div className={Class} key={i}>
						{getDateEvening(menu.date)}
						<div className='MenuContent'>
							{dishsEven}
						</div>
					</div>
				);
			}
		}
	});

	return (
		<div className='AllMenus'>
			<div className='Menus'>
				{menus}
			</div>
			<div className='MenusEvening'>
				{menusEvening}
			</div>
		</div>
	);
}

export default MenuComp;