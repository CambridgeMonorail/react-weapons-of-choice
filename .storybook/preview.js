import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
