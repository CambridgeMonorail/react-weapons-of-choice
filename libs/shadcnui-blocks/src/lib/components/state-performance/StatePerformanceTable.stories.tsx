import type { Meta, StoryObj } from '@storybook/react';
import { StatePerformanceTable } from './index';
import type { StatePerformanceTableProps } from './index';

const meta: Meta<typeof StatePerformanceTable> = {
  title: 'Shadcnui Blocks/StatePerformanceTable',
  component: StatePerformanceTable,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'object',
      description: 'Array of state performance data to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatePerformanceTable>;

const sampleData = [
  { state: 'California', forecast: 100000, q3Adjusted: 95000, actual: 90000, risk: 'high', targetAchieved: 90 },
  { state: 'Texas', forecast: 80000, q3Adjusted: 85000, actual: 87000, risk: 'medium', targetAchieved: 102 },
  { state: 'New York', forecast: 75000, q3Adjusted: 70000, actual: 72000, risk: 'low', targetAchieved: 96 },
];

/**
 * This example shows how to use the StatePerformanceTable component to display a table
 * of state performance data. It is useful for visualizing performance metrics by state.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: StatePerformanceTableProps) => <StatePerformanceTable {...args} />,
  args: {
    data: sampleData,
  },
};

/**
 * This example shows how to use the StatePerformanceTable component with empty data.
 * It is useful for testing the component's behavior when no data is provided.
 */
export const EmptyData: Story = {
  name: 'Empty Data',
  render: (args: StatePerformanceTableProps) => <StatePerformanceTable {...args} />,
  args: {
    data: [],
  },
};

/**
 * This example shows how to use the StatePerformanceTable component with custom data.
 * It is useful for testing the component's behavior with different sets of data.
 */
export const CustomData: Story = {
  name: 'Custom Data',
  render: (args: StatePerformanceTableProps) => <StatePerformanceTable {...args} />,
  args: {
    data: [
      { state: 'Florida', forecast: 60000, q3Adjusted: 62000, actual: 61000, risk: 'medium', targetAchieved: 98 },
      { state: 'Illinois', forecast: 50000, q3Adjusted: 48000, actual: 47000, risk: 'high', targetAchieved: 94 },
    ],
  },
};
