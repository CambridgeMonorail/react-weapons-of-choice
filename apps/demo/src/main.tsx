import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const renderApp = () => {
  try {
    root.render(
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    );
  } catch (error) {
    console.error('Error rendering the app:', error);
    root.render(
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold mb-4 text-primary-foreground">Error</h1>
        <p className="text-lg mb-4 text-foreground">An error occurred while rendering the app.</p>
        <a href="/" className="text-primary hover:underline">
          Go back to Home
        </a>
      </div>
    );
  }
};

renderApp();
