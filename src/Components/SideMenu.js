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
			<Link className='SideMenuElementLink' to='/' onClick={click}><div className="SideMenuElement">Accueil</div></Link>
			<Link className='SideMenuElementLink' to='/Settings' onClick={click}><div className="SideMenuElement">Paramètres</div></Link>
		</div>
	)
}

export default SideMenu;