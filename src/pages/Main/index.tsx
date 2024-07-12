import { Header } from '../../widgets';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div>Main</div>

      {[...new Array(400)].map((_, i) => (
        <div key={i}>Main</div>
      ))}
    </>
  );
};
