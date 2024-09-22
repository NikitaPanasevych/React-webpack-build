import styles from './styles.module.scss';

export interface ProductCardProps {
	title: string;
	image: string;
	price: number;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<div>
				<h3>{title}</h3>
				<p>{price}$</p>
			</div>
		</div>
	);
};

export default ProductCard;
