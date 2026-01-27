import '@rwoc/common-tailwind/main.css';

export const parameters = {
  options: {
    initialActive: 'docs',
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        'Best Practices',
        'Resources',
        'Shadcnui',
        'Shadcnui Blocks',
        'Landing',
      ],
    },
  },
  docs: {
    page: null,
  },
  backgrounds: {
    options: {
      light: { name: 'light', value: '#ffffff' },
      dark: { name: 'dark', value: '#000000' },
    },
  },
};

export const initialGlobals = {
  backgrounds: {
    value: 'light',
  },
};
