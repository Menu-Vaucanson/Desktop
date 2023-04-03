import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Assets/Logo.svg';
import SideMenu from "./SideMenu";

function MenuBar({ theme }) {
	const [Active, setActive] = useState(false);

	let css1 = {};
	let css2 = {};
	if (Active) {
		css1 = { 'transform': 'translateX(1vmax)' };
		css2 = { 'transform': 'translateX(2vmax)' };
	}

	return (
		<div className={theme === 'dark' ? "MenuBar MenuBarDark" : "MenuBar"}>
			<SideMenu theme={theme} state={Active} callback={setActive} />
			<div className={theme === 'dark' ? "MenuButton MenuButtonDark" : "MenuButton"} onClick={() => setActive(old => !old)}>
				<div></div>
				<div style={css1}></div>
				<div style={css2}></div>
			</div>
			<Link to='/' className={theme === 'dark' ? "MenuBarTitle MenuBarTitleDark" : 'MenuBarTitle'}>Menu Vaucanson</Link>
			<a className='MenuLogo' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>
				<img className='MenuLogo' src={Logo} alt='Logo' />
			</a>
		</div>
	);
}



export default MenuBar;