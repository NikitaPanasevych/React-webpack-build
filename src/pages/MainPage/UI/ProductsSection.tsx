import { ProductCard } from 'shared/ui/ProductCart';
import styles from './styles.module.scss';
import { AppButton } from 'shared/ui/Button';

const ProductsSection = () => {
	return (
		<section className={styles.productSection}>
			<div className={styles.productSection__container}>
				<ProductCard title="Product 1" image="https://via.placeholder.com/150" price={100} />
				<ProductCard title="Product 1" image="https://via.placeholder.com/150" price={100} />
				<ProductCard title="Product 1" image="https://via.placeholder.com/150" price={100} />
				<ProductCard title="Product 1" image="https://via.placeholder.com/150" price={100} />
			</div>
			<AppButton>View collection</AppButton>
		</section>
	);
};

export default ProductsSection;
