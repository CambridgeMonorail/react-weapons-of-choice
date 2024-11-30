import { Route, Routes } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import { routes } from './data/routes';

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Toaster />
    </>
  );
}

export { App };
