module.exports = {
  stories: [
    '../src/lib/components/**/*.stories.@(ts|tsx)',
    // ...other story paths
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // ...other addons
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
