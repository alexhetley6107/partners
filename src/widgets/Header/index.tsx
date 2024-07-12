import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../shared/ui';
import s from './Header.module.scss';
import { ROUTE } from '../../shared';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isMainPage = pathname === ROUTE.MAIN;

  const navigateToMain = () => navigate(ROUTE.MAIN);
  const logOut = () => navigate(ROUTE.REGISTER);

  return (
    <header className={s.header}>
      <div className={`${s.flex} ${isMainPage ? s.end : s.space}`}>
        {!isMainPage && <Button onClick={navigateToMain}>Назад</Button>}

        <Button onClick={logOut}>Выход</Button>
      </div>
    </header>
  );
};
