import { useState } from 'react';
import SideMenu from "./SideMenu";

function MenuBar() {
	const [Active, setActive] = useState(false);

	return (
		<div className="MenuBar">
			<SideMenu state={Active} />
			<div className="MenuBarTitle" onClick={() => {
				setActive(old => { return !old });
			}}>Menu Vaucanson</div>
		</div >
	)
}



export default MenuBar;