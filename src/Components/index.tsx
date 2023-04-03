import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Contact from './Contact';
import E404 from './E404';
import Explore from './Explore';
import Informations from './Informations';
import Legal from './Legal';
import Menu from './Menu';
import MenuBar from './MenuBar';
import Security from './Security';
import Settings from './Settings';

function Index() {
	const [theme, setTheme] = useState(JSON.parse(window.localStorage.getItem('theme') as string));

	if (theme === 'dark') {
		// @ts-ignore
		document.body.style = 'background-color: #403F4C';
	} else {
		// @ts-ignore
		document.body.style = 'background-color: #F5FEF5';
	}

	const elements = [
		{
			path: '/',
			element: <Menu theme={theme} />
		}, {
			path: '/Explore',
			element: <Explore theme={theme} />
		}, {
			path: '/Informations',
			element: <Informations theme={theme} />
		}, {
			path: '/Contact',
			element: <Contact theme={theme} />
		}, {
			path: '/Legal',
			element: <Legal />
		}, {
			path: '/Security',
			element: <Security />
		}, {
			path: '/Settings',
			element: <Settings theme={theme} setTheme={setTheme} />
		}, {
			path: '/*',
			element: <E404 theme={theme} />
		}
	];

	return (
		<BrowserRouter>
			<MenuBar theme={theme} />
			<div className="App">
				<Routes>
					{elements.map((element, i) => {
						return <Route path={element.path} element={element.element} key={i} />
					})}
				</Routes>
			</div>
		</BrowserRouter >
	);
}

export default Index;