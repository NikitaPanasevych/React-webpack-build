import { AppButton } from 'shared/ui/Button';
import styles from './styles.module.scss';

const HistorySection = () => {
	return (
		<section className={styles.historySection}>
			<div className={styles.historySection__description}>
				<div>
					<h3>From a studio in London to a global brand with over 400 outlets</h3>
					<p>
						When we started Avion, the idea was simple. Make high quality furniture affordable and available for
						the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and
						design so our Chelsea boutique become the hotbed for the London interior design community.
					</p>
				</div>
				<AppButton>Get in touch</AppButton>
			</div>
			<div className={styles.historySection__image}>
				<img src="https://via.placeholder.com/500" alt="History" />
			</div>
		</section>
	);
};

export default HistorySection;
