import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './Components';
import './Stylesheets/index.css';
import './Stylesheets/dark.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Index />
	</React.StrictMode >
);