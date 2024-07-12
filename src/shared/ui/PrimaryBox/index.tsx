import { FC, ReactNode } from 'react';
import s from './PrimaryBox.module.scss';

export const PrimaryBox: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};
