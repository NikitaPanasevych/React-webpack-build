import FeatureSection from './FeatureSection';
import HeroSection from './HeroSection';
import styles from './styles.module.scss';

const MainPage = () => {
	return (
		<main className={styles.main}>
			<HeroSection />
			<FeatureSection />
		</main>
	);
};

export default MainPage;
