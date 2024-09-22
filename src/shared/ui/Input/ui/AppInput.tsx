import { AppButton } from 'shared/ui/Button';
import styles from './styles.module.scss';

export interface AppInputProps {
	inputText: string;
	buttonText: string;
	style?: 'primary' | 'secondary';
}

const AppInput = ({ inputText, buttonText, style }: AppInputProps) => {
	const variantClass = style ? styles[`input__${style}`] : '';

	return (
		<div className={styles.input}>
			<input className={variantClass} type="text" placeholder={inputText} />
			<AppButton style={style}>{buttonText}</AppButton>
		</div>
	);
};

export default AppInput;
