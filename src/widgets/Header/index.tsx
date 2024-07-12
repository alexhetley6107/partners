import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../shared/ui';
import s from './Header.module.scss';
import { ROUTE } from '../../shared';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isMainPage = pathname === ROUTE.MAIN;

  const navigateToMain = () => navigate(ROUTE.MAIN);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={`${s.flex} ${isMainPage ? s.end : s.space}`}>
          {!isMainPage && <Button onClick={navigateToMain}>Назад</Button>}

          <Button>Выход</Button>
        </div>
      </div>
    </header>
  );
};
