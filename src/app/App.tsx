import './styles/styles.scss';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className="app">
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<AppRouter />
		</div>
	);
};

export default App;
