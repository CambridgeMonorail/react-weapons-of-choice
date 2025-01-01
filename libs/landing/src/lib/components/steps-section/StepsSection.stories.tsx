import type { Meta, StoryObj } from '@storybook/react';
import { StepsSection } from '.';

const meta: Meta<typeof StepsSection> = {
  title: 'Landing/Steps Section',
  component: StepsSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the steps section',
    },
    steps: {
      name: 'Steps',
      control: 'object',
      description: 'An array of steps to display',
    },
    buttonText: {
      name: 'Button Text',
      control: 'text',
      description: 'The text to display on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'clicked',
      description: 'The action to perform when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepsSection>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <StepsSection {...args} />,
  args: {
    title: 'Steps',
    steps: [
      { stepNumber: 1, stepDescription: 'Sign up for an account' },
      { stepNumber: 2, stepDescription: 'Verify your email address' },
      { stepNumber: 3, stepDescription: 'Start using the application' },
    ],
    buttonText: 'Steps',
    buttonAction: () => alert('Steps clicked!'),
    'data-testid': 'steps-section',
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <StepsSection {...args} />,
  args: {
    title: 'Begin Your Journey',
    steps: [
      { stepNumber: 1, stepDescription: 'Create your profile' },
      { stepNumber: 2, stepDescription: 'Customize your settings' },
      { stepNumber: 3, stepDescription: 'Explore the features' },
    ],
    buttonText: 'Begin Now',
    buttonAction: () => alert('Begin Now clicked!'),
    'data-testid': 'steps-section',
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <StepsSection {...args} />,
  args: {
    title: '',
    steps: [],
    buttonText: '',
    buttonAction: () => alert('Button clicked!'),
    'data-testid': 'steps-section',
  },
};
