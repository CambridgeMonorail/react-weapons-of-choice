import type { Meta, StoryObj } from '@storybook/react';
import {
  NumberAndSecondaryStat,
  NumberAndSecondaryStatProps,
} from '.';

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
 * This example demonstrates how to use the comparison prop to display comparison with a baseline value.
 * 
 * Props:
 * - `mainValue`: The current value to be displayed.
 * - `mainLabel`: A label for the main value.
 * - `comparison`: An object containing:
 *   - `baselineValue`: The value to compare against.
 *   - `displayMode`: How to display the comparison ('absolute', 'percent', or 'both').
 *   - `label`: An optional label to describe the comparison.
 * 
 * Effects:
 * - The `comparison` prop drives the display of the comparison element.
 * - `baselineValue` is used to calculate the difference and percentage change.
 * - `displayMode` determines whether the difference is shown as an absolute value, a percentage, or both.
 * - `label` provides additional context for the comparison.
 */
export const ComparisonDemo: Story = {
  name: 'Comparison Demo',
  render: (args: NumberAndSecondaryStatProps) => (
    <div className="flex space-x-4">
      <NumberAndSecondaryStat {...args} />
      <NumberAndSecondaryStat
        mainValue={1000}
        mainLabel="Same Value"
        comparison={{
          baselineValue: 1000,
          displayMode: 'percent',
          label: 'MTD',
        }}
        className="w-[230px] h-[230px]"
      />
      <NumberAndSecondaryStat
        mainValue={500}
        mainLabel="Smaller Value"
        comparison={{
          baselineValue: 1000,
          displayMode: 'absolute',
          label: 'MTD',
        }}
        className="w-[230px] h-[230px]"
      />
      <NumberAndSecondaryStat
        mainValue={2000}
        mainLabel="Larger Value"
        comparison={{
          baselineValue: 1000,
          displayMode: 'percent',
          label: 'MTD',
        }}
        className="w-[230px] h-[230px]"
      />
    </div>
  ),
  args: {
    mainValue: 1500,
    mainLabel: 'Current Value',
    comparison: {
      baselineValue: 1000,
      displayMode: 'percent',
      label: 'MTD',
    },
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
    mainValue: 274057,
    prefix: '€',
    mainLabel: 'Profit',
    reversedLayout: true,
    comparison: {
      baselineValue: 250000,
      displayMode: 'percent',
      label: 'QTD',
    },
    trendline: [
      38594,
      39957,
      35316,
      35913,
      36668,
      45660,
      41949
    ],
    className: 'bg-primary text-primary-foreground w-[230px] h-[230px]',
  },
};
