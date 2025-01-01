import '../../common-tailwind/src/main.css';

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
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
};