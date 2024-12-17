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
 * Demonstrates the default usage of the Steps component.
 * 
 * This example shows how to use the Steps component to display a series of steps
 * with titles and descriptions. It is useful for guiding users through a process
 * or workflow.
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

/**
 * Demonstrates the Steps component without a heading.
 * 
 * This example shows how to use the Steps component without providing a heading.
 * It is useful when the heading is not needed or is provided by a parent component.
 */
export const WithoutHeading: Story = {
  name: 'Without Heading',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    subheading: 'How it Works?',
    highlight: 'Works?',
    steps: stepData,
    className: '',
  },
};

/**
 * Demonstrates the Steps component without a subheading.
 * 
 * This example shows how to use the Steps component without providing a subheading.
 * It is useful when the subheading is not needed or is provided by a parent component.
 */
export const WithoutSubheading: Story = {
  name: 'Without Subheading',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'STEPS',
    highlight: 'Works?',
    steps: stepData,
    className: '',
  },
};

/**
 * Demonstrates the Steps component without a heading and subheading.
 * 
 * This example shows how to use the Steps component without providing a heading and subheading.
 * It is useful when both are not needed or are provided by a parent component.
 */
export const WithoutHeadingAndSubheading: Story = {
  name: 'Without Heading and Subheading',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    highlight: 'Works?',
    steps: stepData,
    className: '',
  },
};
