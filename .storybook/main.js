module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
};
