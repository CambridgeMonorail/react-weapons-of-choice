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
 * Default story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with just a value and label.
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
 * CustomClassName story for the NumberAndSecondaryStat component.
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

/**
 * WithoutGoalAndComparison story for the NumberAndSecondaryStat component.
 * This example shows how to use the component without goal and comparison props.
 */
export const WithoutGoalAndComparison: Story = {
  name: 'Without Goal and Comparison',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 7890,
    prefix: '£',
    mainLabel: 'Sales',
    reversedLayout: false,
    trendline: [150, 250, 350, 450, 550],
    secondaryStats: [
      { value: 100, label: 'New Signups', direction: 'up' },
      { value: 30, label: 'Cancellations', direction: 'down' },
    ],
    className: '',
  },
};

/**
 * WithOnlyTrendline story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with only a trendline.
 */
export const WithOnlyTrendline: Story = {
  name: 'With Only Trendline',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 3456,
    prefix: '¥',
    mainLabel: 'Expenses',
    reversedLayout: false,
    trendline: [50, 150, 250, 350, 450],
    className: '',
  },
};

/**
 * WithOnlySecondaryStats story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with only secondary stats.
 */
export const WithOnlySecondaryStats: Story = {
  name: 'With Only Secondary Stats',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 2345,
    prefix: '₹',
    mainLabel: 'Net Income',
    reversedLayout: false,
    secondaryStats: [
      { value: 150, label: 'Active Users', direction: 'up' },
      { value: 20, label: 'Inactive Users', direction: 'down' },
    ],
    className: '',
  },
};

/**
 * ReversedLayout story for the NumberAndSecondaryStat component.
 * This example shows how to use the component with the reversed layout.
 */
export const ReversedLayout: Story = {
  name: 'Reversed Layout',
  render: (args: NumberAndSecondaryStatProps) => (
    <NumberAndSecondaryStat {...args} />
  ),
  args: {
    mainValue: 4567,
    prefix: '₩',
    mainLabel: 'Gross Margin',
    reversedLayout: true,
    goal: { current: 4567, target: 8000, showBar: true, label: 'Margin Goal' },
    comparison: {
      baselineValue: 4000,
      displayMode: 'absolute',
      label: 'Compared to last year',
    },
    trendline: [300, 400, 500, 600, 700],
    secondaryStats: [
      { value: 250, label: 'New Leads', direction: 'up' },
      { value: 40, label: 'Lost Leads', direction: 'down' },
    ],
    className: '',
  },
};

/**
 * FormatValueDemo story for the NumberAndSecondaryStat component.
 * This example demonstrates the formatValue feature for different ranges of numbers.
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
