import styles from './Login.module.css';
import { FormEvent } from 'react';
import Headling from '../../shared/ui/heading/heading';
import Input from '../../shared/ui/input/input';
import Button from '../../shared/ui/button/button';
import { Link } from 'react-router';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
}

export function Login() {

	const submit = async (e: FormEvent) => {
		e.preventDefault();
	};



	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			{/* {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>} */}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input id="email" name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input id="password" name='password' type="password" placeholder='Пароль' />
				</div>
				<Button appearence="big">Вход</Button>
			</form>
			<div className={styles['links']}>
				<div>Нет акканута?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
}