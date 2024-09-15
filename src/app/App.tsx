import './styles/styles.scss';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<AppRouter />
		</div>
	);
};

export default App;
