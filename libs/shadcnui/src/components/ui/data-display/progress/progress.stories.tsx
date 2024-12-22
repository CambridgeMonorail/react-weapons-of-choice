import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Shadcnui/Data Display/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      name: 'Value',
      control: 'number',
      description: 'The progress value',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the progress bar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

/**
 * This story demonstrates the default usage of the Progress component
 * with a sample value. It can be used as a reference for how to integrate
 * and customize the Progress component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Progress {...args} />,
  args: {
    value: 50,
    className: '',
  },
};

/**
 * This story demonstrates the Progress component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => <Progress {...args} />,
  args: {
    value: 75,
    className: 'bg-secondary',
  },
};
