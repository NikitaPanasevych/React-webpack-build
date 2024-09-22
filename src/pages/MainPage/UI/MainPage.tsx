import FeatureSection from './FeatureSection';
import HeroSection from './HeroSection';
import styles from './styles.module.scss';
import ProductsSection from './ProductsSection';
import HistorySection from './HistorySection';
import { Footer } from 'widgets/Footer';

const MainPage = () => {
	return (
		<main className={styles.main}>
			<HeroSection />
			<FeatureSection />
			<ProductsSection />
			<HistorySection />
		</main>
	);
};

export default MainPage;
