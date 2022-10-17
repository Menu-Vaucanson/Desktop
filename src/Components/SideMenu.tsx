import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SideMenu({ state, callback, theme }) {
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
		callback((old: boolean) => {
			return !old;
		});
	}

	const list: Array<{ title: string, link: string }> = [
		{
			title: 'Accueil',
			link: '/'
		}, {
			title: 'Explorer',
			link: '/Explore'
		}, {
			title: 'Sécurité',
			link: '/Security'
		}, {
			title: 'Informations',
			link: '/Informations'
		}, {
			title: 'Paramètres',
			link: '/Settings'
		}
	];

	function useKeypress(key: string, action: Function) {
		useEffect(() => {
		  function onKeyup(e) {
			if (e.key === key) action();
		  }
		  window.addEventListener("keyup", onKeyup);
		  return () => window.removeEventListener("keyup", onKeyup);
		});
	}
	useKeypress("Escape", ()=>callback(false));
	return (
		<div className={theme === 'dark' ? "SideMenu SideMenuDark" : "SideMenu"} style={css}>
			<div className='SideMenuClickHanlder' onClick={click} style={css2}></div>
			{list.map((element, i) => {
				return (
					<Link key={i} className={theme === 'dark' ? 'SideMenuElement SideMenuElementDark' : "SideMenuElement"} to={element.link} onClick={click}>{element.title}</Link>
				);
			})}
		</div>
	);
}

export default SideMenu;