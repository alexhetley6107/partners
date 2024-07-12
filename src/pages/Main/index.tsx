import { PrimaryBox } from '../../shared/ui';
import { Header } from '../../widgets';

export const MainPage = () => {
  return (
    <>
      <Header />

      <PrimaryBox>
        <h2>Наша Команда</h2>
        <p>
          Это опытные специалисты, хорошо работающие во всех задачах, которые ложатся на их плечи, и
          умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </PrimaryBox>
      <div>Main</div>

      {[...new Array(400)].map((_, i) => (
        <div key={i}>Main</div>
      ))}
    </>
  );
};
