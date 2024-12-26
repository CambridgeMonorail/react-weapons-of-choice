import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Shadcnui/Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      name: 'Orientation',
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the separator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

/**
 * This story demonstrates the default usage of the Separator component
 * with a horizontal orientation. It can be used as a reference for how to
 * integrate and customize the Separator component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Separator {...args} orientation="horizontal" />,
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the Separator component with a vertical orientation.
 */
export const Vertical: Story = {
  name: 'Vertical',
  render: (args) => <Separator {...args} orientation="vertical" />,
  args: {
    className: '',
  },
};
