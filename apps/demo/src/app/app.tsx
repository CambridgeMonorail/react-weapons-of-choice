import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from '@rwoc/shadcnui';
import { routes } from './data/routes';
import { ErrorBoundary } from './components/ErrorBoundary';


const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${location.pathname}`);
  }, [location]);

  return (
    <div className="bg-background text-foreground min-h-screen min-w-screen" data-testid="app-container">
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={
              <ErrorBoundary>
                <div data-testid={`route-${route.path.replace('/', '-')}`}>
                  {route.element}
                </div>
              </ErrorBoundary>
            } 
          />
        ))}
      </Routes>
      <Toaster data-testid="toaster" />
    </div>
  );
};

export { App };
