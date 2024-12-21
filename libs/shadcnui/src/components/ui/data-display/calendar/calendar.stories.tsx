import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Shadcnui/Data Display/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the calendar',
    },
    showOutsideDays: {
      name: 'Show Outside Days',
      control: 'boolean',
      description: 'Whether to show days outside the current month',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * This story demonstrates the default usage of the Calendar component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Calendar component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Calendar {...args} />,
  args: {
    className: '',
    showOutsideDays: true,
  },
};

/**
 * This story demonstrates the Calendar component with the option to
 * hide days outside the current month.
 */
export const HideOutsideDays: Story = {
  name: 'Hide Outside Days',
  render: (args) => <Calendar {...args} />,
  args: {
    className: '',
    showOutsideDays: false,
  },
};
