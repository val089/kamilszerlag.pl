import { ReactNode } from 'react';
import classes from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  href?: string;
};

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
};
