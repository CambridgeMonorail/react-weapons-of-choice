import type { Meta, StoryObj } from '@storybook/react';
import { NumberAndSecondaryStat, NumberAndSecondaryStatProps } from './NumberAndSecondaryStat';

const meta: Meta<typeof NumberAndSecondaryStat> = {
  title: 'Shadcnui Blocks/NumberAndSecondaryStat',
  component: NumberAndSecondaryStat,
  tags: ['autodocs'],
  argTypes: {
    mainValue: { control: 'text' },
    prefix: { control: 'text' },
    mainLabel: { control: 'text' },
    reversedLayout: { control: 'boolean' },
    goal: { control: 'object' },
    comparison: { control: 'object' },
    trendline: { control: 'array' },
    secondaryStats: { control: 'array' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberAndSecondaryStat>;

/**
 * Default story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with basic props.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: NumberAndSecondaryStatProps) => <NumberAndSecondaryStat {...args} />,
  args: {
    mainValue: 1234,
    prefix: '$',
    mainLabel: 'Revenue',
    reversedLayout: false,
    goal: { current: 1234, target: 2000, showBar: true, label: 'Goal' },
    comparison: { baselineValue: 1000, displayMode: 'both', label: 'Compared to last month' },
    trendline: [100, 200, 300, 400, 500],
    secondaryStats: [
      { value: 200, label: 'New Customers', direction: 'up' },
      { value: 50, label: 'Churned Customers', direction: 'down' },
    ],
    className: '',
  },
};

/**
 * CustomClassName story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with custom Tailwind CSS classes.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args: NumberAndSecondaryStatProps) => <NumberAndSecondaryStat {...args} />,
  args: {
    mainValue: 5678,
    prefix: '€',
    mainLabel: 'Profit',
    reversedLayout: true,
    goal: { current: 5678, target: 10000, showBar: true, label: 'Profit Goal' },
    comparison: { baselineValue: 5000, displayMode: 'percent', label: 'Compared to last quarter' },
    trendline: [200, 300, 400, 500, 600],
    secondaryStats: [
      { value: 300, label: 'New Orders', direction: 'up' },
      { value: 20, label: 'Returned Orders', direction: 'down' },
    ],
    className: 'bg-primary text-primary-foreground',
  },
};
