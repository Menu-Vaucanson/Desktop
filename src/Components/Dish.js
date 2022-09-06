import blue from '../Themes/Dishs/blue';
import red from '../Themes/Dishs/red';
import green from '../Themes/Dishs/green';
import yellow from '../Themes/Dishs/yellow';

function Dish({ data }) {

	let css = {}
	if (data.style === 'blue') {
		css = blue;
	} else if (data.style === 'red') {
		css = red;
	} else if (data.style === 'green') {
		css = green;
	} else if (data.style === 'yellow') {
		css = yellow;
	}

	return (<div className="Dish" style={css}>
		<div className="DishTitle">{data.name}</div>
		{data.content}
	</div>)
}

export default Dish;