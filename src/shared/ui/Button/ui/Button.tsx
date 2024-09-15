import styles from './styles.module.scss';

export interface AppButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const AppButton = ({ children, className, onClick }: AppButtonProps) => {
	return (
		<button className={`${className} ${styles.AppButton}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default AppButton;
