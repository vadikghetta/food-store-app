import styles from './Button.module.css';
import { ButtonProps } from './button.props';
import clsx from 'clsx';

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {
    return (
        <button className={clsx(styles['button'], styles['accent'], className, {
            [styles['small']]: appearence === 'small',
            [styles['big']]: appearence === 'big'
        })} {...props}>{children}</button>
    );
}

export default Button;