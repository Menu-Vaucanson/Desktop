import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import MenuBar from './Components/MenuBar';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className="App">
			<MenuBar />
			<Main />
		</div >
	</React.StrictMode>
);