import { useState } from 'react';
import { Link } from 'react-router-dom';

import SideMenu from "./SideMenu";
import Logo from '../Assets/Logo.png';

function MenuBar({ theme }) {
	const [Active, setActive] = useState(false);
	return (
		<div className={theme === 'dark' ? "MenuBar MenuBarDark" : "MenuBar"}>
			<SideMenu theme={theme} state={Active} callback={setActive} />
			<div className="MenuButton" onClick={() => {
				setActive(old => { return !old });
			}}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<Link to='/' className={theme === 'dark' ? "MenuBarTitle MenuBarTitleDark" : 'MenuBarTitle'}>Menu Vaucanson</Link>
			<a className='MenuLogo' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>
				<img className='MenuLogo' src={Logo} alt='Logo' />
			</a>
		</div >
	)
}



export default MenuBar;