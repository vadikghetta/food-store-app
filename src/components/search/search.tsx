import { forwardRef } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { SearchProps } from './search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} className={clsx(styles['input'], className, {
				[styles['invalid']]: isValid
			})} {...props} />
			<img className={styles['icon']} src='../../assets/svg/search.svg' alt='Иконка лупы' />
		</div>
	);
});

export default Search;