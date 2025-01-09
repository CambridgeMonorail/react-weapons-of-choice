import type { Meta, StoryObj } from '@storybook/react';
import {
  NumberAndSecondaryStat,
  NumberAndSecondaryStatProps,
} from './NumberAndSecondaryStat';

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
 * This example shows a simple use case for the component with just a value and label.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 1234,
    mainLabel: 'Simple Label',
    className: 'w-[230px] h-[230px]',
  },
};

/**
 * This example demonstrates how large numeric values are formatted for display.
 * - Numeric values less than a thousand are shown as-is.
 * - Values in the thousands are shown with a 'K' suffix (e.g., 1,500 becomes 1.5K).
 * - Values in the millions are shown with an 'M' suffix (e.g., 1,500,000 becomes 1.5M).
 * - Values in the billions are shown with a 'B' suffix (e.g., 1,500,000,000 becomes 1.5B).
 * - Only one decimal place is shown for values in the thousands, millions, and billions.
 */
export const FormatValueDemo: Story = {
  name: 'Format Value Demo',
  render: () => (
    <div className="flex space-x-4">
      <NumberAndSecondaryStat
        mainValue={999}
        mainLabel="Less than a thousand"
        className="w-[230px] h-[230px]"
      />
      <NumberAndSecondaryStat
        mainValue={1500}
        mainLabel="More than a thousand"
        className="w-[230px] h-[230px]"
      />
      <NumberAndSecondaryStat
        mainValue={1500000}
        mainLabel="More than a million"
        className="w-[230px] h-[230px]"
      />
      <NumberAndSecondaryStat
        mainValue={1500000000}
        mainLabel="More than a billion"
        className="w-[230px] h-[230px]"
      />
    </div>
  ),
};

/**
 * This example shows how to use the prefix prop to display a currency symbol.
 */
export const WithPrefix: Story = {
  name: 'With Prefix',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 123456,
    prefix: '$',
    mainLabel: 'Revenue',
    className: 'w-[230px] h-[230px]',
  },
};

/**
 * This example demonstrates how to use the goal prop to display goal progress.
 */
export const GoalDemo: Story = {
  name: 'Goal Demo',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 7500,
    mainLabel: 'Current Progress',
    goal: { current: 7500, target: 10000, showBar: true, label: 'Goal Progress' },
    className: 'w-[230px] h-[230px]',
  },
};

/**
 * This example shows how to use the component with custom Tailwind CSS classes.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 5678,
    prefix: '€',
    mainLabel: 'Profit',
    reversedLayout: true,
    goal: { current: 5678, target: 10000, showBar: true, label: 'Profit Goal' },
    comparison: {
      baselineValue: 5000,
      displayMode: 'percent',
      label: 'Compared to last quarter',
    },
    trendline: [200, 300, 400, 500, 600],
    secondaryStats: [
      { value: 300, label: 'New Orders', direction: 'up' },
      { value: 20, label: 'Returned Orders', direction: 'down' },
    ],
    className: 'bg-primary text-primary-foreground',
  },
};
