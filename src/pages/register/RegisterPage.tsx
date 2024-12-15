import { Link } from 'react-router';
import styles from '../Login/Login.module.css';
import { FormEvent } from 'react';
import Headling from '../../shared/ui/heading/heading';
import Input from '../../shared/ui/input/input';
import Button from '../../shared/ui/button/button';


export type RegisterForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
	name: {
		value: string;
	};
}

export function Register() {


	const submit = async (e: FormEvent) => {
		e.preventDefault();
		// dispatch(userActions.clearRegisterError());
		// const target = e.target as typeof e.target & RegisterForm;
		// const { email, password, name } = target;
		// dispatch(register({ email: email.value, password: password.value, name: name.value }));
	};

	return (
		<div className={styles['login']}>
			<Headling>Регистрация</Headling>
			{/* {registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>} */}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input id="email" name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input id="password" name='password' type="password" placeholder='Пароль' />
				</div>
				<div className={styles['field']}>
					<label htmlFor="name">Ваше имя</label>
					<Input id="name" name='name' placeholder='Имя' />
				</div>
				<Button appearence="big">Зарегистрироваться</Button>
			</form>
			<div className={styles['links']}>
				<div>Есть акканут?</div>
				<Link to="/auth/login">Войти</Link>
			</div>
		</div>
	);
}