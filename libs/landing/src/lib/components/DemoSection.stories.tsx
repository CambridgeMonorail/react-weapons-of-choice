import type { Meta, StoryObj } from '@storybook/react';
import { DemoSection } from './DemoSection';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof DemoSection> = {
  title: 'Landing/DemoSection',
  component: DemoSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The title of the demo section',
    },
    description: {
      name: 'Description',
      control: { type: 'text' },
      description: 'The description of the demo section',
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

type Story = StoryObj<typeof DemoSection>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: 'Demo Section',
    description: 'This is the demo section content.',
    buttonText: 'Click Me',
    buttonAction: action('button-click'),
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: 'Try Our Demo',
    description: 'Experience the features of our product.',
    buttonText: 'Try Now',
    buttonAction: action('button-click'),
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: '',
    description: '',
    buttonText: '',
    buttonAction: action('button-click'),
  },
};
