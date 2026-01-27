module.exports = {
  stories: [
    '../src/lib/components/**/*.stories.@(ts|tsx)',
    // ...other story paths
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  core: {
    builder: 'webpack5',
  },
};
