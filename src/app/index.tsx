import { withProviders } from './providers';

function WrappedApp() {
  return (
    <>
      <div>HU</div>
    </>
  );
}

export const App = withProviders(WrappedApp);
