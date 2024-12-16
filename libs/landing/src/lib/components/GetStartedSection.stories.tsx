import type { Meta, StoryObj } from '@storybook/react';
import { GetStartedSection } from './GetStartedSection';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof GetStartedSection> = {
  title: 'Landing/GetStartedSection',
  component: GetStartedSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The title of the get started section',
    },
    steps: {
      name: 'Steps',
      control: { type: 'object' },
      description: 'An array of steps to display',
    },
    buttonText: {
      name: 'Button Text',
      control: { type: 'text' },
      description: 'The text displayed on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'button-click',
      description: 'The action performed when the button is clicked',
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
      { stepNumber: 1, stepDescription: 'Sign up for an account.' },
      { stepNumber: 2, stepDescription: 'Verify your email address.' },
      { stepNumber: 3, stepDescription: 'Complete your profile.' },
    ],
    buttonText: 'Get Started',
    buttonAction: action('button-click'),
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <GetStartedSection {...args} />,
  args: {
    title: 'Begin Your Journey',
    steps: [
      { stepNumber: 1, stepDescription: 'Create an account.' },
      { stepNumber: 2, stepDescription: 'Confirm your email.' },
      { stepNumber: 3, stepDescription: 'Set up your profile.' },
    ],
    buttonText: 'Start Now',
    buttonAction: action('button-click'),
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <GetStartedSection {...args} />,
  args: {
    title: '',
    steps: [],
    buttonText: '',
    buttonAction: action('button-click'),
  },
};
