import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { HeroSection } from '.';

const meta: Meta<typeof HeroSection> = {
  title: 'Landing/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The main title of the hero section',
    },
    subtitle: {
      name: 'Subtitle',
      control: { type: 'text' },
      description: 'An optional subtitle for the hero section',
    },
    description: {
      name: 'Description',
      control: { type: 'text' },
      description: 'An optional description for the hero section',
    },
    highlights: {
      name: 'Highlights',
      control: { type: 'array' },
      description: 'An optional list of highlights to display in the hero section',
    },
    image: {
      name: 'Image',
      control: { type: 'text' },
      description: 'The URL of the image to display in the hero section',
    },
    imageAlt: {
      name: 'Image Alt',
      control: { type: 'text' },
      description: 'The alt text for the image',
    },
    ctaPrimary: {
      name: 'Primary CTA',
      control: { type: 'object' },
      description: 'Optional primary call-to-action button configuration',
    },
    ctaSecondary: {
      name: 'Secondary CTA',
      control: { type: 'object' },
      description: 'Optional secondary call-to-action button configuration',
    },
    layout: {
      name: 'Layout',
      control: { type: 'select', options: ['left', 'right', 'stacked'] },
      description: 'Layout option for the hero section',
    },
    className: {
      name: 'Class Name',
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the hero section',
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['light', 'dark'],
      description: 'The visual variant for the section\'s background and text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <HeroSection {...args} />,
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Your journey starts here',
    description: 'Discover the features and benefits of our platform.',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: 'https://via.placeholder.com/400',
    imageAlt: 'Placeholder Image',
    ctaPrimary: { text: 'Get Started', onClick: action('primary-cta-click') },
    ctaSecondary: { text: 'Learn More', onClick: action('secondary-cta-click') },
    layout: 'left',
    variant: 'light',
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <HeroSection {...args} />,
  args: {
    title: 'Explore Our Services',
    subtitle: 'We offer a wide range of solutions',
    description: 'Find out how we can help you achieve your goals.',
    highlights: ['Service 1', 'Service 2', 'Service 3'],
    image: 'https://via.placeholder.com/400',
    imageAlt: 'Service Image',
    ctaPrimary: { text: 'Contact Us', onClick: action('primary-cta-click') },
    ctaSecondary: { text: 'Read More', onClick: action('secondary-cta-click') },
    layout: 'right',
    variant: 'dark',
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <HeroSection {...args} />,
  args: {
    title: '',
    subtitle: '',
    description: '',
    highlights: [],
    image: '',
    imageAlt: '',
    ctaPrimary: { text: '', onClick: action('primary-cta-click') },
    ctaSecondary: { text: '', onClick: action('secondary-cta-click') },
    layout: 'stacked',
  },
};
