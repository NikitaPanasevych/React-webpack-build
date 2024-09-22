import './styles/styles.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Footer } from 'widgets/Footer';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<AppRouter />
			<Footer />
		</div>
	);
};

export default App;
