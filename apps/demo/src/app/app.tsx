import { useRoutes, HashRouter } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import routes from './routes';

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <HashRouter>
        {routing}
      </HashRouter>
      <Toaster />
    </>
  );
}

export { App };
