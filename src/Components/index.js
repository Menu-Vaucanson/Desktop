import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import Menu from './Menu';
import MenuBar from './MenuBar';
import E404 from './E404';
import Settings from './Settings';
import Informations from './Informations';
import Contact from './Contact';

function Index() {

	const [theme, settheme] = useState(window.localStorage.getItem('theme'));

	return (
		<BrowserRouter>
			<MenuBar />
			<div className="App">
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/Informations" element={<Informations />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Settings" element={<Settings theme={theme} settheme={settheme} />} />
					<Route path="/*" element={<E404 />} />
				</Routes>
			</div>
		</BrowserRouter >
	);
}

export default Index;