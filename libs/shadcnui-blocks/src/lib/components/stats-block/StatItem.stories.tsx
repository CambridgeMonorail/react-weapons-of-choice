import type { Meta, StoryObj } from '@storybook/react';
import { StatItem, StatItemProps } from './StatItem';
import { User, TrendingUp, DollarSign } from 'lucide-react';

const meta: Meta<typeof StatItem> = {
  title: 'Shadcnui Blocks/StatItem',
  component: StatItem,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    value: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof StatItem>;

/**
 * Default usage of the StatItem component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: StatItemProps) => <StatItem {...args} />,
  args: {
    icon: <User className="text-primary" />,
    value: '1,234',
    title: 'Users',
    description: 'Number of active users',
  },
};

/**
 * Custom usage of the StatItem component with a different icon and value.
 */
export const Custom: Story = {
  name: 'Custom',
  render: (args: StatItemProps) => <StatItem {...args} />,
  args: {
    icon: <TrendingUp className="text-primary" />,
    value: '567',
    title: 'Sessions',
    description: 'Number of sessions today',
  },
};

/**
 * Another custom usage of the StatItem component with a different icon and value.
 */
export const Revenue: Story = {
  name: 'Revenue',
  render: (args: StatItemProps) => <StatItem {...args} />,
  args: {
    icon: <DollarSign className="text-primary" />,
    value: '$12,345',
    title: 'Revenue',
    description: 'Total revenue this month',
  },
};

/**
 * CustomClass story for the StatItem component.
 * This example shows how to use the StatItem component with a custom className.
 */
export const CustomClass: Story = {
  name: 'Custom Class',
  render: (args: StatItemProps) => <StatItem {...args} />,
  args: {
    className: 'bg-green-50 p-6 rounded-lg',
    icon: <User className="text-primary" />,
    value: '1,234',
    title: 'Users',
    description: 'Number of active users',
  },
};
