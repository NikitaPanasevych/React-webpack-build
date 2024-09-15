import AppLink from 'shared/ui/AppLink/ui/AppLink';
import styles from './styles.module.scss';

const Links = () => {
	return (
		<div className={styles.links}>
			<AppLink to={'/'}>Plant pots</AppLink>
			<AppLink to={'/about'}>Ceramics</AppLink>
			<AppLink to={'/about'}>Tables</AppLink>
			<AppLink to={'/about'}>Chairs</AppLink>
			<AppLink to={'/about'}>Crockery</AppLink>
			<AppLink to={'/about'}>Tableware</AppLink>
			<AppLink to={'/about'}>Cutlery</AppLink>
		</div>
	);
};

export default Links;
