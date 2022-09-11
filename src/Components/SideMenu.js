import { Link } from 'react-router-dom';

function SideMenu({ state, callback }) {
	let css = {};
	let css2 = {};
	if (state) {
		css2 = {};
		css = { 'transform': 'none' };
	} else {
		css = {};
		css2 = { 'display': 'none' };
	}

	function click() {
		callback(old => {
			return !old;
		})
	}

	return (
		<div className="SideMenu" style={css}>
			<div className='SideMenuClickHanlder' onClick={click} style={css2}></div>
			<Link className='SideMenuElement' to='/' onClick={click}>Accueil</Link>
			<Link className='SideMenuElement' to='/Settings' onClick={click}>Paramètres</Link>
		</div>
	)
}

export default SideMenu;