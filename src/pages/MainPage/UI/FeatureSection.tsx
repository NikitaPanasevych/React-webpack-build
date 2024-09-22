import { FeatureCard } from 'shared/ui/FeatureCard';
import DeliveryIcon from 'shared/assets/icons/delivery.svg';
import styles from './styles.module.scss';

const FeatureSection = () => {
	return (
		<section className={styles.features}>
			<h3>What makes us different?</h3>
			<div className={styles.features__container}>
				<FeatureCard>
					<DeliveryIcon viewBox="0 0 20 20" height="40" width="40" />
					<h4>Next day as standard</h4>
					<p>Order before 3pm and get your order the next day as standard</p>
				</FeatureCard>
				<FeatureCard>
					<DeliveryIcon viewBox="0 0 20 20" height="40" width="40" />
					<h4>Next day as standard</h4>
					<p>Order before 3pm and get your order the next day as standard</p>
				</FeatureCard>
				<FeatureCard>
					<DeliveryIcon viewBox="0 0 20 20" height="40" width="40" />
					<h4>Next day as standard</h4>
					<p>Order before 3pm and get your order the next day as standard</p>
				</FeatureCard>
				<FeatureCard>
					<DeliveryIcon viewBox="0 0 20 20" height="40" width="40" />
					<h4>Next day as standard</h4>
					<p>Order before 3pm and get your order the next day as standard</p>
				</FeatureCard>
			</div>
		</section>
	);
};

export default FeatureSection;
