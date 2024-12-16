import '../../common-tailwind/src/main.css';
import { addParameters } from '@storybook/react';

addParameters({
  options: {
    initialActive: 'docs',
    docs: {
      page: null,
    },
  },
});
