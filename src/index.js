import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';

import Menu from './Components/Menu';
import MenuBar from './Components/MenuBar';
import E404 from './Components/E404';
import Settings from './Components/Settings';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter className="App">
			<MenuBar />
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/Settings" element={<Settings />} />
				<Route path="/*" element={<E404 />} />
			</Routes>
		</BrowserRouter >
	</React.StrictMode>
);