import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from './AboutSection';

const meta: Meta<typeof AboutSection> = {
  title: 'Landing/About Section',
  component: AboutSection,
  tags: ['autodocs'],

  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the about section',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'The description of the about section',
    },
    logos: {
      name: 'Logos',
      control: 'array',
      description:
        'An array of React elements representing logos to display in the about section',
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
    description: 'This is the about section content.',
    logos: [
      <img src="logo1.png" alt="Logo 1" key="logo1" />,
      <img src="logo2.png" alt="Logo 2" key="logo2" />,
    ],
  },
};

/**
 * Story for the AboutSection component with different prop combinations.
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: 'Our Mission',
    description: 'We aim to provide the best services.',
    logos: [
      <img src="logo3.png" alt="Logo 3" key="logo3" />,
      <img src="logo4.png" alt="Logo 4" key="logo4" />,
    ],
  },
};

/**
 * Story for the AboutSection component with edge cases.
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: '',
    description: '',
    logos: [],
  },
};
