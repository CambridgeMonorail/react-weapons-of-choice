import type { Meta, StoryObj } from '@storybook/react';
import { RecentSales } from '.';
import type { RecentSalesProps } from './index';

const meta: Meta<typeof RecentSales> = {
  title: 'Shadcnui Blocks/RecentSales',
  component: RecentSales,
  tags: ['autodocs'],
  argTypes: {
    salesData: {
      name: 'Sales Data',
      control: 'object',
      description: 'Array of sales data to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecentSales>;

const salesData = [
  { name: 'John Doe', email: 'john@example.com', amount: '$100', avatarSrc: '', avatarFallback: 'JD' },
  { name: 'Jane Smith', email: 'jane@example.com', amount: '$150', avatarSrc: '', avatarFallback: 'JS' },
  { name: 'Alice Johnson', email: 'alice@example.com', amount: '$200', avatarSrc: '', avatarFallback: 'AJ' },
];

/**
 * This example shows how to use the RecentSales component to display a list of recent sales.
 * It is useful for showing recent transactions or activities.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: RecentSalesProps) => <RecentSales {...args} />,
  args: {
    salesData,
  },
};

/**
 * This example shows how to use the RecentSales component with custom sales data.
 * It is useful for displaying different sets of sales information.
 */
export const CustomSalesData: Story = {
  name: 'Custom Sales Data',
  render: (args: RecentSalesProps) => <RecentSales {...args} />,
  args: {
    salesData: [
      { name: 'Bob Brown', email: 'bob@example.com', amount: '$250', avatarSrc: '', avatarFallback: 'BB' },
      { name: 'Charlie Davis', email: 'charlie@example.com', amount: '$300', avatarSrc: '', avatarFallback: 'CD' },
    ],
  },
};
