import { NavLink, Outlet } from 'react-router';
import styles from './styles.module.css';
import Button from '../../shared/ui/button/button';
import clsx from 'clsx';



export function Layout() {

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
				<div className={styles['name']}>{'Hello'}</div>
				<div className={styles['email']}>{'hello@gmail.com'}</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to='/' className={({ isActive }) => clsx(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню" />
					Меню</NavLink>
				<NavLink to='/cart' className={({ isActive }) => clsx(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/cart-icon.svg" alt="Иконка корзины" />Корзина <span className={styles['cart-count']}>10</span></NavLink>

			</div>
			<Button className={styles['exit']} >
				<img src="/src/assets/svg/exit.svg" alt="Иконка выхода" />
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}