import { useRoutes } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster />
    </>
  );
}

export { App };
