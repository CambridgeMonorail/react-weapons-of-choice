import type { Meta, StoryObj } from '@storybook/react';
import { Steps, StepsProps } from '.';

const meta: Meta<typeof Steps> = {
  title: 'Shadcn UI Blocks/Steps',
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    heading: {
      name: 'Heading',
      control: 'text',
      description: 'The heading of the steps section',
    },
    subheading: {
      name: 'Subheading',
      control: 'text',
      description: 'The subheading of the steps section',
    },
    highlight: {
      name: 'Highlight',
      control: 'text',
      description: 'The highlighted text in the heading',
    },
    steps: {
      name: 'Steps',
      control: 'object',
      description: 'Array of steps to display',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the steps component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

const stepData = [
  { title: "Register", description: "Sign up by providing your details." },
  { title: "Customize", description: "Choose preferences and settings." },
  { title: "Enjoy", description: "Access all features instantly." }
];

/**
 * Default story for the Steps component.
 * 
 * This story demonstrates the default usage of the Steps component
 * with sample steps and default properties. It can be used as a reference
 * for how to integrate and customize the Steps component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'STEPS',
    subheading: 'How it Works?',
    highlight: 'Works?',
    steps: stepData,
    className: '',
  },
};
