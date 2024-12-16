import type { Meta, StoryObj } from '@storybook/react';
import { GetStartedSection } from './GetStartedSection';

const meta: Meta<typeof GetStartedSection> = {
  title: 'Landing/Get Started Section',
  component: GetStartedSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the get started section',
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
type Story = StoryObj<typeof GetStartedSection>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <GetStartedSection {...args} />,
  args: {
    title: 'Get Started',
    steps: [
      { stepNumber: 1, stepDescription: 'Sign up for an account' },
      { stepNumber: 2, stepDescription: 'Verify your email address' },
      { stepNumber: 3, stepDescription: 'Start using the application' },
    ],
    buttonText: 'Get Started',
    buttonAction: () => alert('Get Started clicked!'),
    'data-testid': 'get-started-section',
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <GetStartedSection {...args} />,
  args: {
    title: 'Begin Your Journey',
    steps: [
      { stepNumber: 1, stepDescription: 'Create your profile' },
      { stepNumber: 2, stepDescription: 'Customize your settings' },
      { stepNumber: 3, stepDescription: 'Explore the features' },
    ],
    buttonText: 'Begin Now',
    buttonAction: () => alert('Begin Now clicked!'),
    'data-testid': 'get-started-section',
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <GetStartedSection {...args} />,
  args: {
    title: '',
    steps: [],
    buttonText: '',
    buttonAction: () => alert('Button clicked!'),
    'data-testid': 'get-started-section',
  },
};
