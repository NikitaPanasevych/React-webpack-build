import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
	return (
		<div className="app">
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Routes>
				<Route path={'/about'} element={<AboutPage />} />
				<Route path={'/'} element={<MainPage />} />
			</Routes>
		</div>
	);
};

export default App;
