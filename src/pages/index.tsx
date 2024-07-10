import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '../shared';
import { MainPage } from './Main';
import { RegisterPage } from './Register';
import { PartnerPage } from './Partner';

export const Routing = () => {
  const routes = [
    { path: ROUTE.MAIN, element: <MainPage /> },
    { path: ROUTE.PARTNER, element: <PartnerPage /> },
    { path: ROUTE.REGISTER, element: <RegisterPage /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
