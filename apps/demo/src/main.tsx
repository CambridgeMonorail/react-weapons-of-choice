import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const baseElement = document.querySelector('base');
const baseUrl = baseElement ? baseElement.getAttribute('href') || '/' : import.meta.env.BASE_URL;

root.render(
  <StrictMode>
    <HashRouter basename={baseUrl}>
      <App />
    </HashRouter>
  </StrictMode>
);
