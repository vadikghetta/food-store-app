import { forwardRef } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';
import { InputProps } from './input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props }, ref) {
    return (
        <input ref={ref} className={clsx(styles['input'], className, {
            [styles['invalid']]: isValid
        })} {...props} />
    );
});

export default Input;