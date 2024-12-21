import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Shadcnui/Data Display/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the skeleton',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/**
 * This story demonstrates the default usage of the Skeleton component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Skeleton component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Skeleton {...args} />,
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the Skeleton component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => <Skeleton {...args} />,
  args: {
    className: 'h-10 w-10 bg-primary',
  },
};
