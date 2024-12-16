import type { Meta, StoryObj } from '@storybook/react';
import { CommunitySection } from './CommunitySection';
import { action } from '@storybook/addon-actions'; // Still explicitly import the action utility

const meta: Meta<typeof CommunitySection> = {
  title: 'Landing/CommunitySection',
  component: CommunitySection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The title of the community section',
    },
    description: {
      name: 'Description',
      control: { type: 'text' },
      description: 'The description of the community section',
    },
    buttonText: {
      name: 'Button Text',
      control: { type: 'text' },
      description: 'The text displayed on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'button-click', // Automatically handled by Storybook's actions
      description: 'The action performed when the button is clicked',
    },
    isDarkBackground: {
      name: 'Is Dark Background',
      control: { type: 'boolean' },
      description: 'Whether the background is dark',
    },
  },
};

export default meta; // Ensure proper default export for Storybook

type Story = StoryObj<typeof CommunitySection>;

/**
 * Default story for the CommunitySection component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: 'Join Our Community',
    description: 'Be a part of our amazing community and stay updated with the latest news.',
    buttonText: 'Get Started',
    buttonAction: action('button-click'), // Correctly associate the action
    isDarkBackground: false,
  },
};

/**
 * Story for the CommunitySection component with different prop combinations.
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: 'Connect with Us',
    description: 'Engage with our community and share your experiences.',
    buttonText: 'Join Now',
    buttonAction: action('button-click'),
    isDarkBackground: true,
  },
};

/**
 * Story for the CommunitySection component with edge cases.
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: '',
    description: '',
    buttonText: '',
    buttonAction: action('button-click'),
    isDarkBackground: false,
  },
};
