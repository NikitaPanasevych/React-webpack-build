import styles from './styles.module.scss';

export interface FeatureCardProps {
	children: React.ReactNode;
}

const FeatureCard = ({ children }: FeatureCardProps) => {
	return <div className={styles.Card}>{children}</div>;
};

export default FeatureCard;
