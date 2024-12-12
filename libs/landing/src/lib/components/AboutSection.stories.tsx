import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from './AboutSection';

const meta: Meta<typeof AboutSection> = {
  title: 'Landing/AboutSection',
  component: AboutSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the about section',
    },
    content: {
      name: 'Content',
      control: 'text',
      description: 'The content of the about section',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

/**
 * Default story for the AboutSection component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: 'About Us',
    content: 'This is the about section content.',
  },
};
