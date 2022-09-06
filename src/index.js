import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './Stylesheets/index.css';

import Menu from './Components/Menu';
import MenuBar from './Components/MenuBar';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter className="App">
			<MenuBar />
			<Routes>
				<Route path="/" element={<Menu />} />
			</Routes>
		</BrowserRouter >
	</React.StrictMode>
);