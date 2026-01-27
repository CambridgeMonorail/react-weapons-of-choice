// .storybook/YourTheme.js

import { create } from 'storybook/theming/create';

export default create({
  base: 'light',
  fontBase: '"Manrope", "Helvetica", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'RWOC Storybook',
  brandUrl: 'https://cambridgemonorail.github.io/react-weapons-of-choice/',
  brandImage: './app-logo.webp',
  brandTarget: '_self',

  //
  colorPrimary: '#311c6b',
  colorSecondary: '#494275',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#311c6b',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
