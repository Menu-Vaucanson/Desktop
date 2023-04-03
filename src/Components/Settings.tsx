import { useState } from 'react';

import CustomCheck from './CustomCheck';

function Settings({ theme, setTheme }) {
	const [Setting1, setSetting1] = useState(theme === 'dark' ? 1 : 0);
	const [Setting2, setSetting2] = useState(JSON.parse(window.localStorage.getItem('evening') as string));

	function DarkClick() {
		let temp = theme;
		if (temp == null || temp === 'light') {
			temp = 'dark';
		} else {
			temp = 'light';
		}
		window.localStorage.setItem('theme', JSON.stringify(temp));
		setTheme(temp);
		setSetting1(old => old ? 0 : 1);
	}

	function InterneClick() {
		let temp = JSON.parse(window.localStorage.getItem('evening') as string);
		if (temp == null) {
			temp = false;
		}
		window.localStorage.setItem('evening', JSON.stringify(!temp));
		setSetting2((old: boolean) => !old);
	}

	function CleanClick() {
		window.sessionStorage.clear();
	}

	function DeleteClick() {
		setSetting1(0);
		setSetting2(0);
		setTheme('light');
		window.sessionStorage.clear();
		window.localStorage.clear();
	}


	return (
		<div className={theme === 'dark' ? "Settings SettingsDark" : "Settings"}>
			<div className="Setting SettingAnimated0" onClick={DarkClick}>
				<div className="SettingTitle">Mode sombre</div>
				<div className="SettingDesc">Un mode <i>dark</i>, pour ceux qui préfèrent le noir...</div>
				<CustomCheck type={Setting1} />
			</div>
			<div className="Setting SettingAnimated1" onClick={InterneClick}>
				<div className="SettingTitle">Mode interne</div>
				<div className="SettingDesc">Mode interne, pour voir les menus du soir.</div>
				<CustomCheck type={Setting2} />
			</div>
			<div className="Setting SettingAnimated2" onClick={CleanClick}>
				<div className="SettingTitle">Effacer le cache</div>
				<div className="SettingDesc">Libère le stockage instantané de toute les données mises par le site.</div>
			</div>
			<div className="Setting SettingAnimated3 red" onClick={DeleteClick}>
				<div className="SettingTitle">Effacer toutes les données</div>
				<div className="SettingDesc">Efface 100% des données stockées sur votre appareil par le site. Attention, cela réinitialise les paramètres ci-dessus.</div>
			</div>
		</div>
	);
}

export default Settings;