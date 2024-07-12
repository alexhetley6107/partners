import { FC, ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonTypeUnion = 'light' | 'dark' | 'primary';

type Props = {
  type?: ButtonTypeUnion;
  onClick?: () => void;
  children: ReactNode;
};

export const Button: FC<Props> = ({ type = 'light', onClick, children }) => {
  return (
    <button className={`${s.button} ${s[type]}`} onClick={onClick}>
      <div className="flex">{children}</div>
    </button>
  );
};
