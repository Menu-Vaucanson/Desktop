import { useState } from 'react';
import SideMenu from "./SideMenu";

import Logo from '../Assets/Logo.png';

function MenuBar() {
	const [Active, setActive] = useState(false);
	return (
		<div className="MenuBar">
			<SideMenu state={Active} callback={setActive} />
			<div className="MenuButton" onClick={() => {
				setActive(old => { return !old });
			}}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className="MenuBarTitle">Menu Vaucanson</div>
			<a className='MenuLogo' href='https://www.yout-ube.com/watch?v=dQw4w9WgXcQ'>
				<img className='MenuLogo' src={Logo} alt='Logo' />
			</a>
		</div >
	)
}



export default MenuBar;