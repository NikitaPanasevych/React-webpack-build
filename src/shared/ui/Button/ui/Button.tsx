import styles from './styles.module.scss';

export interface AppButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	style?: 'primary' | 'secondary';
}

const AppButton = ({ children, style, onClick }: AppButtonProps) => {
	const variantClass = style ? styles[`AppButton__${style}`] : '';

	return (
		<button className={` ${styles.AppButton} ${variantClass}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default AppButton;
