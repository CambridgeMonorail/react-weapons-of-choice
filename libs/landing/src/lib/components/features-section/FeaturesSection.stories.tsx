import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesSection } from '.';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Landing/FeaturesSection',
  component: FeaturesSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The main heading for the features section',
    },
    features: {
      name: 'Features',
      control: { type: 'object' },
      description: 'An array of feature objects, each containing a title and description',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <FeaturesSection {...args} />,
  args: {
    title: 'Our Features',
    features: [
      { title: 'Feature 1', description: 'Description of feature 1' },
      { title: 'Feature 2', description: 'Description of feature 2' },
      { title: 'Feature 3', description: 'Description of feature 3' },
    ],
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <FeaturesSection {...args} />,
  args: {
    title: 'Key Features',
    features: [
      { title: 'Feature A', description: 'Description of feature A' },
      { title: 'Feature B', description: 'Description of feature B' },
      { title: 'Feature C', description: 'Description of feature C' },
    ],
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <FeaturesSection {...args} />,
  args: {
    title: '',
    features: [],
  },
};
