import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import { routes } from './data/routes';
import { ErrorBoundary } from './components/ErrorBoundary';


const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${location.pathname}`);
  }, [location]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={
              <ErrorBoundary>
                {route.element}
              </ErrorBoundary>
            } 
          />
        ))}
      </Routes>
      <Toaster />
    </div>
  );
};

export { App };
