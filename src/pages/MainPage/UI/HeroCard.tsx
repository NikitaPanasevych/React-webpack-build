import AppButton from 'shared/ui/Button/ui/Button';
import styles from './styles.module.scss';

const HeroCard = () => {
	return (
		<div className={styles.heroCard}>
			<div className={styles.heroCard__top}>
				<h2>Luxury homeware for people who love timeless design quality</h2>
				<p>
					We create beautiful homeware that is designed to last. Our products are made from the finest materials
					and are built to stand the test of time.
				</p>
			</div>

			<AppButton>View collection</AppButton>
		</div>
	);
};

export default HeroCard;
