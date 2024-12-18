import type { Meta, StoryObj } from '@storybook/react';
import { ForecastChart, ForecastChartProps } from '.';

const meta: Meta<typeof ForecastChart> = {
  title: 'Shadcnui Blocks/ForecastChart',
  component: ForecastChart,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'object',
      description: 'Array of data points for the chart',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ForecastChart>;

const sampleData = [
  { month: 'Jan', forecast: 4000, actual: 2400 },
  { month: 'Feb', forecast: 3000, actual: 1398 },
  { month: 'Mar', forecast: 2000, actual: 9800 },
  { month: 'Apr', forecast: 2780, actual: 3908 },
  { month: 'May', forecast: 1890, actual: 4800 },
  { month: 'Jun', forecast: 2390, actual: 3800 },
  { month: 'Jul', forecast: 3490, actual: 4300 },
];

/**
 * Default story for the ForecastChart component.
 * This example shows how to use the ForecastChart component with sample data.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: ForecastChartProps) => <ForecastChart {...args} />,
  args: {
    data: sampleData,
  },
};

/**
 * EmptyData story for the ForecastChart component.
 * This example shows how to use the ForecastChart component with empty data.
 * It is useful for testing how the component behaves with no data.
 */
export const EmptyData: Story = {
  name: 'Empty Data',
  render: (args: ForecastChartProps) => <ForecastChart {...args} />,
  args: {
    data: [],
  },
};

/**
 * CustomData story for the ForecastChart component.
 * This example shows how to use the ForecastChart component with custom data.
 * It demonstrates the flexibility of the component to handle different datasets.
 */
export const CustomData: Story = {
  name: 'Custom Data',
  render: (args: ForecastChartProps) => <ForecastChart {...args} />,
  args: {
    data: [
      { month: 'Aug', forecast: 5000, actual: 3000 },
      { month: 'Sep', forecast: 4000, actual: 2000 },
      { month: 'Oct', forecast: 3000, actual: 1000 },
      { month: 'Nov', forecast: 2000, actual: 500 },
      { month: 'Dec', forecast: 1000, actual: 250 },
    ],
  },
};
