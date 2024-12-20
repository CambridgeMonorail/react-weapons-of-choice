import type { Meta, StoryObj } from '@storybook/react';
import { Steps, StepsProps } from '.';

const meta: Meta<typeof Steps> = {
  title: 'Shadcnui Blocks/Steps',
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
    highlightClassName: {
      name: 'Highlight Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the highlighted text',
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
 * This example shows how to use the Steps component to display a series of steps
 * with titles and descriptions. It is useful for guiding users through a process
 * or workflow.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'Default Heading',
    subheading: 'This is a subheading with a highlight',
    highlight: 'highlight',
    steps: [
      { title: 'Step 1', description: 'Description for step 1' },
      { title: 'Step 2', description: 'Description for step 2' },
      { title: 'Step 3', description: 'Description for step 3' },
    ],
    className: '',
  },
};

/**
 * This example shows how to use the Steps component with a custom highlight class.
 * It is useful when you want to apply custom styles to the highlighted text.
 */
export const WithCustomHighlightClass: Story = {
  name: 'With Custom Highlight Class',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'Custom Highlight Class Heading',
    subheading: 'This is a subheading with a custom highlight',
    highlight: 'custom',
    highlightClassName: 'text-accent', // Custom highlight class
    steps: [
      { title: 'Step 1', description: 'Description for step 1' },
      { title: 'Step 2', description: 'Description for step 2' },
      { title: 'Step 3', description: 'Description for step 3' },
    ],
    className: '',
  },
};

/**
 * This example shows how to use the Steps component without providing a heading.
 * It is useful when the heading is not needed or is provided by a parent component.
 */
export const WithoutHeading: Story = {
  name: 'Without Heading',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    subheading: 'This is a subheading without a heading',
    highlight: 'subheading',
    steps: [
      { title: 'Step 1', description: 'Description for step 1' },
      { title: 'Step 2', description: 'Description for step 2' },
      { title: 'Step 3', description: 'Description for step 3' },
    ],
    className: '',
  },
};

/**
 * This example shows how to use the Steps component without providing a subheading.
 * It is useful when the subheading is not needed or is provided by a parent component.
 */
export const WithoutSubheading: Story = {
  name: 'Without Subheading',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'Heading without subheading',
    steps: [
      { title: 'Step 1', description: 'Description for step 1' },
      { title: 'Step 2', description: 'Description for step 2' },
      { title: 'Step 3', description: 'Description for step 3' },
    ],
    className: '',
  },
};

/**
 * This example shows how to use the Steps component without providing a highlight.
 * It is useful when the highlight is not needed or is provided by a parent component.
 */
export const WithoutHighlight: Story = {
  name: 'Without Highlight',
  render: (args: StepsProps) => <Steps {...args} />,
  args: {
    heading: 'Heading without highlight',
    subheading: 'This is a subheading without highlight',
    steps: [
      { title: 'Step 1', description: 'Description for step 1' },
      { title: 'Step 2', description: 'Description for step 2' },
      { title: 'Step 3', description: 'Description for step 3' },
    ],
    className: '',
  },
};

/**
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
