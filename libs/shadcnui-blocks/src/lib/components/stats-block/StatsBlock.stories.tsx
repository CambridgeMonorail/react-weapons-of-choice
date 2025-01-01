import { Meta, StoryObj } from '@storybook/react';
import { StatsBlock, StatsBlockProps } from './StatsBlock';
import { User, TrendingUp, DollarSign, Activity, ShoppingCart } from 'lucide-react';

const meta: Meta<typeof StatsBlock> = {
  title: 'Shadcnui Blocks/StatsBlock',
  component: StatsBlock,
  tags: ['autodocs'],
};

export default meta;

/**
 * Default story for the StatsBlock component.
 * This example shows how to use the StatsBlock component with sample data.
 */
export const Default: StoryObj<StatsBlockProps> = {
  name: 'Default',
  render: (args) => <StatsBlock {...args} />,
  args: {
    stats: [
      { icon: <User />, title: 'Users', value: '1,200', description: 'Total number of users' },
      { icon: <TrendingUp />, title: 'Growth', value: '30%', description: 'Growth rate' },
      { icon: <DollarSign />, title: 'Revenue', value: '$12,000', description: 'Total revenue' },
    ],
  },
};

/**
 * CustomIcons story for the StatsBlock component.
 * This example shows how to use the StatsBlock component with custom icons.
 */
export const CustomIcons: StoryObj<StatsBlockProps> = {
  name: 'Custom Icons',
  render: (args) => <StatsBlock {...args} />,
  args: {
    stats: [
      { icon: <User className="text-blue-500" />, title: 'New Users', value: '500', description: 'New users this month' },
      { icon: <TrendingUp className="text-green-500" />, title: 'Monthly Growth', value: '15%', description: 'Growth rate this month' },
      { icon: <DollarSign className="text-yellow-500" />, title: 'Monthly Revenue', value: '$5,000', description: 'Revenue this month' },
    ],
  },
};

/**
 * EmptyData story for the StatsBlock component.
 * This example shows how the StatsBlock component behaves when there is no data.
 */
export const EmptyData: StoryObj<StatsBlockProps> = {
  name: 'Empty Data',
  render: (args) => <StatsBlock {...args} />,
  args: {
    stats: [],
  },
};

/**
 * MixedData story for the StatsBlock component.
 * This example shows how to use the StatsBlock component with a mix of different data types.
 */
export const MixedData: StoryObj<StatsBlockProps> = {
  name: 'Mixed Data',
  render: (args) => <StatsBlock {...args} />,
  args: {
    stats: [
      { icon: <Activity className="text-red-500" />, title: 'Active Sessions', value: '120', description: 'Current active sessions' },
      { icon: <ShoppingCart className="text-purple-500" />, title: 'Orders', value: '75', description: 'Total orders today' },
      { icon: <DollarSign className="text-yellow-500" />, title: 'Revenue', value: '$8,000', description: 'Revenue today' },
    ],
  },
};

/**
 * CustomClass story for the StatsBlock component.
 * This example shows how to use the StatsBlock component with a custom className.
 */
export const CustomClass: StoryObj<StatsBlockProps> = {
  name: 'Custom Class',
  render: (args) => <StatsBlock {...args} />,
  args: {
    className: 'bg-blue-50 p-6 rounded-lg',
    stats: [
      { icon: <User />, title: 'Users', value: '1,200', description: 'Total number of users' },
      { icon: <TrendingUp />, title: 'Growth', value: '30%', description: 'Growth rate' },
      { icon: <DollarSign />, title: 'Revenue', value: '$12,000', description: 'Total revenue' },
    ],
  },
};
