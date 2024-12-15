import styles from './Heading.module.css';
import clsx from 'clsx';
import { HeadlingProps } from './heading.props';

function Headling({ children, className, ...props }: HeadlingProps) {
	return (
		<h1 className={clsx(className, styles['h1'])} {...props}>{children}</h1>
	);
}

export default Headling;