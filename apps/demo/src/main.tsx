import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const renderApp = () => {
  try {
    root.render(
      <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </StrictMode>
    );
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