import HeroCard from './HeroCard';
import styles from './styles.module.scss';
import BackgroundImage from 'shared/assets/images/Frame 2.svg';

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<img
				src="https://res.cloudinary.com/dhpaxigzl/image/upload/fl_preserve_transparency/v1726428561/Hero_Blocks_1_x9ai2h.jpg?_s=public-apps"
				alt="Background"
				className={styles.hero__image}
			/>
			<HeroCard />
		</section>
	);
};

export default HeroSection;
