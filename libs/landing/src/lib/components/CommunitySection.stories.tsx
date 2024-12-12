import type { Meta, StoryObj } from '@storybook/react';
import { CommunitySection } from './CommunitySection';

const meta: Meta<typeof CommunitySection> = {
  title: 'Landing/CommunitySection',
  component: CommunitySection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the community section',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'The description of the community section',
    },
    buttonText: {
      name: 'Button Text',
      control: 'text',
      description: 'The text of the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'clicked',
      description: 'The action to perform when the button is clicked',
    },
    isDarkBackground: {
      name: 'Is Dark Background',
      control: 'boolean',
      description: 'Whether the background is dark',
    },
  },
};

export default meta; // Ensure the default export is correctly defined

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
    buttonAction: () => alert('Button clicked!'),
    isDarkBackground: false,
  },
};
