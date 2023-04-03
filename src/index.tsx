import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './Components';
import './Stylesheets/dark.css';
import './Stylesheets/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Index />
	</React.StrictMode >
);