import { AppInput } from 'shared/ui/Input';
import styles from './styles.module.scss';
import FacebookIcon from 'shared/assets/icons/Facebook.svg';
import TwitterIcon from 'shared/assets/icons/Twitter.svg';
import PinterestIcon from 'shared/assets/icons/Pinterest.svg';
import SkypeIcon from 'shared/assets/icons/Skype.svg';
import LinkedinIcon from 'shared/assets/icons/Linkedin.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<ul>
					<li>Menu</li>
					<li>New arrivals</li>
					<li>Best sellers</li>
					<li>Recently viewed</li>
					<li>Popular this week</li>
					<li>All products</li>
				</ul>
				<ul>
					<li>Categories</li>
					<li>Crockery</li>
					<li>Furniture</li>
					<li>Homeware</li>
					<li>Plant pots</li>
					<li>Chairs</li>
				</ul>
				<ul>
					<li>Our company</li>
					<li>About us</li>
					<li>Vacancies</li>
					<li>Contact us</li>
					<li>Privacy</li>
					<li>Returns policy</li>
				</ul>
				<div className={styles.footer__container__newsletter}>
					<h4>Join our mailing list</h4>
					<AppInput style="primary" inputText="your@email.com" buttonText="Sign up" />
				</div>
			</div>
			<div className={styles.footer__social}>
				<div>
					<span>Copyright 2024 Avion LTD</span>
				</div>
				<div className={styles.footer__social__icons}>
					<span>
						<FacebookIcon />
					</span>
					<span>
						<TwitterIcon />
					</span>
					<span>
						<PinterestIcon />
					</span>
					<span>
						<SkypeIcon />
					</span>
					<span>
						<LinkedinIcon />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
