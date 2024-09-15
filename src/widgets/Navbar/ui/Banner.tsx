import styles from './styles.module.scss';
import DeliveryIcon from 'shared/assets/icons/delivery.svg';

const Banner = () => {
	return (
		<div className={styles.banner}>
			{' '}
			<DeliveryIcon /> Free delivery on all orders over £50 with code easter checkout
		</div>
	);
};

export default Banner;
