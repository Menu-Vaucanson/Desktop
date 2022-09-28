import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import Menu from './Menu';
import MenuBar from './MenuBar';
import E404 from './E404';
import Settings from './Settings';
import Informations from './Informations';
import Contact from './Contact';
import SelectDate from './SelectDate';

function Index() {

	const [theme, settheme] = useState(JSON.parse(window.localStorage.getItem('theme')));

	if (theme === 'dark') {
		document.body.style = 'background-color: #403F4C';
	} else {
		document.body.style = 'background-color: #F5FEF5';
	}

	return (
		<BrowserRouter>
			<MenuBar theme={theme} />
			<div className="App">
				<Routes>
					<Route path="/" element={<Menu theme={theme} />} />
					<Route path="/SelectDate" element={<SelectDate theme={theme} />} />
					<Route path="/Informations" element={<Informations theme={theme} />} />
					<Route path="/Contact" element={<Contact theme={theme} />} />
					<Route path="/Settings" element={<Settings theme={theme} settheme={settheme} />} />
					<Route path="/*" element={<E404 />} />
				</Routes>
			</div>
		</BrowserRouter >
	);
}

export default Index;