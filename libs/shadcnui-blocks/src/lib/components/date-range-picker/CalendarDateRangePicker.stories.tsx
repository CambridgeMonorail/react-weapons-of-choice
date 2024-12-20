import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDateRangePicker } from './index';

const meta: Meta<typeof CalendarDateRangePicker> = {
  title: 'Shadcnui Blocks/Calendar Date Range Picker',
  component: CalendarDateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDateRangePicker>;

/**
 * Default usage of the CalendarDateRangePicker component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <CalendarDateRangePicker {...args} />,
  args: {
    className: '',
  },
};

/**
 * Demonstrates the CalendarDateRangePicker component with custom Tailwind CSS classes.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => <CalendarDateRangePicker {...args} />,
  args: {
    className: 'bg-primary text-primary-foreground',
  },
};
