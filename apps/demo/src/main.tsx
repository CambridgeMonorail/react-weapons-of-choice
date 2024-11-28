import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const baseUrl = import.meta.env.BASE_URL;

const renderApp = () => {
  try {
    if (process.env.DEBUG === 'true') {
      console.debug('Rendering the app...');
    }

    root.render(
      <StrictMode>
        <HashRouter basename={baseUrl}>
          <App />
        </HashRouter>
      </StrictMode>
    );

    if (process.env.DEBUG === 'true') {
      console.debug('App rendered successfully.');
    }
  } catch (error) {
    console.error('Error rendering the app:', error);
    root.render(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p className="text-lg mb-4">An error occurred while rendering the app.</p>
        <a href="/" className="text-primary-600 hover:underline">
          Go back to Home
        </a>
      </div>
    );
  }
};

renderApp();
