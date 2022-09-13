import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';

import Menu from './Components/Menu';
import MenuBar from './Components/MenuBar';
import E404 from './Components/E404';
import Settings from './Components/Settings';
import Informations from './Components/Informations';
import Contact from './Components/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<MenuBar />
			<div className="App">
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/Informations" element={<Informations />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Settings" element={<Settings />} />
					<Route path="/*" element={<E404 />} />
				</Routes>
			</div>
		</BrowserRouter >
	</React.StrictMode >
);