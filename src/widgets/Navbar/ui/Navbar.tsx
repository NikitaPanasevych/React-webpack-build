import styles from './styles.module.scss';
import Links from './Links';
import CartIcon from 'shared/assets/icons/cart.svg';
import SearchIcon from 'shared/assets/icons/search.svg';
import AvatarIcon from 'shared/assets/icons/avatar.svg';
import Banner from './Banner';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Banner />
			<div className={styles.nav__container}>
				<h1 className={styles.title}>Avion</h1>
				<Links />
				<div className={styles.rightSide}>
					<CartIcon />
					<SearchIcon />
					<AvatarIcon />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
