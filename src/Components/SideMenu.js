function SideMenu({ state }) {
	let css = {};
	if (state) {
		css = { 'transform': 'none' };
	} else {
		css = {};
	}

	return (
		<div className="SideMenu" style={css}>This is a side menu</div>
	)
}

export default SideMenu;