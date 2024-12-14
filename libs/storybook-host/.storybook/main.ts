import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../**/*.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: require.resolve('postcss') },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '../../libs/common-tailwind/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['./assets'],
  viteFinal: async (config, { configType }) => {
    // Define 'process.env'
    config.define = {
      ...config.define,
      'process.env': process.env,
    };

    return config;
  },
};

export default config;