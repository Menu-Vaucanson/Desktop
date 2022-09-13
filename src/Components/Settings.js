import { useState } from 'react';

import CustomCheck from './CustomCheck';

function Settings({ theme, settheme }) {
	let defaulttheme = 0;
	if (theme === 'dark') {
		defaulttheme = 1;
	}
	const [Setting1, setSetting1] = useState(defaulttheme);
	const [Setting2, setSetting2] = useState(0);

	function DarkClick() {
		let temp = theme;
		if (temp == null) {
			temp = 'light';
		} else if (temp === 'light') {
			temp = 'dark';
		} else {
			temp = 'light';
		}
		window.localStorage.setItem('theme', temp);
		settheme(temp);
		setSetting1(old => !old);
	}

	function InterneClick() {
		setSetting2(old => !old);
	}

	function CleanClick() {
		window.sessionStorage.clear();
	}

	function DeleteClick() {
		setSetting1(0);
		setSetting2(0);
		window.sessionStorage.clear();
		window.localStorage.clear();
	}


	return (
		<div className={theme === 'dark' ? "Settings SettingsDark" : "Settings"}>
			<div className="Setting" onClick={DarkClick}>
				<div className="SettingTitle">Mode sombre</div>
				<div className="SettingDesc">Un mode <i>dark</i>, pour ceux qui préfèrent le noir...</div>
				<CustomCheck type={Setting1} />
			</div>
			<div className="Setting" onClick={InterneClick}>
				<div className="SettingTitle">Mode interne</div>
				<div className="SettingDesc">Mode interne, pour voir les menus du soir.</div>
				<CustomCheck type={Setting2} />
			</div>
			<div className="Setting" onClick={CleanClick}>
				<div className="SettingTitle">Effacer le cache</div>
				<div className="SettingDesc">Libère le stockage instantané de toute les données mises par le site.</div>
			</div>
			<div className="Setting red" onClick={DeleteClick}>
				<div className="SettingTitle">Effacer toutes les données</div>
				<div className="SettingDesc">Efface 100% des données stockées sur votre appareil par le site. Attention, cela réinitialise les paramètres ci-dessus.</div>
			</div>
		</div>
	);
}

export default Settings;