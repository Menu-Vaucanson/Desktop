import blue from '../Themes/Light/blue';
import red from '../Themes/Light/red';
import green from '../Themes/Light/green';
import yellow from '../Themes/Light/yellow';

import blueDark from '../Themes/Dark/blueDark';
import redDark from '../Themes/Dark/redDark';
import greenDark from '../Themes/Dark/greenDark';
import yellowDark from '../Themes/Dark/yellowDark';

function Dish({ data, theme }) {

	let css = {}
	if (theme === 'dark') {
		if (data.styleDark === 'blueDark') {
			css = blueDark;
		} else if (data.styleDark === 'redDark') {
			css = redDark;
		} else if (data.styleDark === 'greenDark') {
			css = greenDark;
		} else if (data.styleDark === 'yellowDark') {
			css = yellowDark;
		}
	} else {
		if (data.style === 'blue') {
			css = blue;
		} else if (data.style === 'red') {
			css = red;
		} else if (data.style === 'green') {
			css = green;
		} else if (data.style === 'yellow') {
			css = yellow;
		}
	}

	return (<div className="Dish" style={css}>
		<div className="DishTitle">{data.name}</div>
		<div className='DishContent'>
			{data.content}
		</div>
	</div>)
}

export default Dish;