import blue from '../Themes/Light/blue';
import green from '../Themes/Light/green';
import red from '../Themes/Light/red';
import yellow from '../Themes/Light/yellow';

import blueDark from '../Themes/Dark/blueDark';
import greenDark from '../Themes/Dark/greenDark';
import redDark from '../Themes/Dark/redDark';
import yellowDark from '../Themes/Dark/yellowDark';

import halloween from '../Themes/Dark/halloweenDark';
import halloweenDark from '../Themes/Light/halloween';

import ChristmasBlue from '../Themes/Light/ChristmasBlue';
import ChristmasGreen from '../Themes/Light/ChristmasGreen';
import ChristmasRed from '../Themes/Light/ChristmasRed';
import ChristmasYellow from '../Themes/Light/ChristmasYellow';


function Dish({ data, theme }) {
	let css = {};

	if (theme === 'dark') {
		if (data.styleDark === 'blueDark') {
			css = blueDark;
		} else if (data.styleDark === 'redDark') {
			css = redDark;
		} else if (data.styleDark === 'greenDark') {
			css = greenDark;
		} else if (data.styleDark === 'yellowDark') {
			css = yellowDark;
		} else if (data.styleDark === 'halloweenDark') {
			css = halloweenDark;
		} else if (data.styleDark === 'ChristmasBlue') {
			css = ChristmasBlue;
		} else if (data.styleDark === 'ChristmasRed') {
			css = ChristmasRed;
		} else if (data.styleDark === 'ChristmasGreen') {
			css = ChristmasGreen;
		} else if (data.styleDark === 'ChristmasYellow') {
			css = ChristmasYellow;
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
		} else if (data.style === 'halloween') {
			css = halloween;
		} else if (data.style === 'ChristmasBlue') {
			css = ChristmasBlue;
		} else if (data.style === 'ChristmasRed') {
			css = ChristmasRed;
		} else if (data.style === 'ChristmasGreen') {
			css = ChristmasGreen;
		} else if (data.style === 'ChristmasYellow') {
			css = ChristmasYellow;
		}
	}

	return (
		<div className="Dish" style={css}>
			<div className="DishTitle">{data.name}</div>
			<div className="DishContent">{data.content}</div>
		</div>
	);
}

export default Dish;