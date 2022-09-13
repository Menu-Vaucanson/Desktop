import Dish from './Dish';

function getDate(date) {
	let d = date.split('/');
	const MenuDate = new Date(d[2], d[1] - 1, d[0]);

	if (MenuDate.getDay() === 1) {
		return 'Lundi';
	} else if (MenuDate.getDay() === 2) {
		return 'Mardi'
	} else if (MenuDate.getDay() === 3) {
		return 'Mercredi'
	} else if (MenuDate.getDay() === 4) {
		return 'Jeudi'
	} else if (MenuDate.getDay() === 5) {
		return 'Vendredi'
	} else {
		return 'Menu du ' + date;
	}
}

function getDateEvening(date) {
	let d = date.split('/');
	const MenuDate = new Date(d[2], d[1] - 1, d[0]);

	if (MenuDate.getDay() === 1) {
		return 'Lundi soir';
	} else if (MenuDate.getDay() === 2) {
		return 'Mardi soir'
	} else if (MenuDate.getDay() === 3) {
		return 'Mercredi soir'
	} else if (MenuDate.getDay() === 4) {
		return 'Jeudi soir'
	} else {
		return 'Menu du ' + date + ' au soir';
	}
}

function MenuComp({ data, theme }) {
	const menus = [];
	const menusEvening = [];

	const isEvening = JSON.parse(window.localStorage.getItem('evening'));

	data.forEach((menu, i) => {
		menus.push(
			<div className='Menu' key={i}>
				{getDate(menu.date)}
				<div className='MenuContent'>
					{menu.menu.map((dish, i) => {
						return <Dish data={dish} key={i} theme={theme} />;
					})}
				</div>
			</div>
		)
		if (isEvening) {
			const dishsEven = [];
			menu.evening?.forEach((dish, i) => {
				dishsEven.push(<Dish data={dish} key={i} theme={theme} />);
			})
			if (!dishsEven.length) return;
			menusEvening.push(
				<div className='Menu' key={i}>
					{getDateEvening(menu.date)}
					<div className='MenuContent'>
						{dishsEven}
					</div>
				</div>
			)
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
	)
}

export default MenuComp;