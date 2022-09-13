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

function MenuComp({ data, theme }) {
	const menus = [];

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
	});

	return (
		<div className='Menus'>
			{menus}
		</div>
	)
}

export default MenuComp;