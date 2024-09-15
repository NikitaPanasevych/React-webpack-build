import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface AppLinkProps {
	children: React.ReactNode;
	to: string;
}

const AppLink: FC<AppLinkProps> = ({ children, to }) => {
	return (
		<Link className={styles.AppLink} to={to}>
			{children}
		</Link>
	);
};

export default AppLink;
