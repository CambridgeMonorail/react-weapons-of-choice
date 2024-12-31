import type { Meta, StoryObj } from '@storybook/react';
import { StatsBlock, StatsBlockProps } from './StatsBlock';
import { FaUser, FaChartLine, FaDollarSign } from 'react-icons/fa';

const meta: Meta<typeof StatsBlock> = {
  title: 'Shadcnui Blocks/StatsBlock',
  component: StatsBlock,
  tags: ['autodocs'],
  argTypes: {
    stats: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof StatsBlock>;

/**
 * Default usage of the StatsBlock component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: StatsBlockProps) => <StatsBlock {...args} />,
  args: {
    stats: [
      {
        icon: <FaUser className="text-primary" />,
        value: '1,234',
        title: 'Users',
        description: 'Number of active users',
      },
      {
        icon: <FaChartLine className="text-primary" />,
        value: '567',
        title: 'Sessions',
        description: 'Number of sessions today',
      },
      {
        icon: <FaDollarSign className="text-primary" />,
        value: '$12,345',
        title: 'Revenue',
        description: 'Total revenue this month',
      },
    ],
  },
};

/**
 * Custom usage of the StatsBlock component with different data.
 */
export const Custom: Story = {
  name: 'Custom',
  render: (args: StatsBlockProps) => <StatsBlock {...args} />,
  args: {
    stats: [
      {
        icon: <FaUser className="text-primary" />,
        value: '2,345',
        title: 'New Users',
        description: 'Number of new users this week',
      },
      {
        icon: <FaChartLine className="text-primary" />,
        value: '789',
        title: 'Page Views',
        description: 'Number of page views today',
      },
      {
        icon: <FaDollarSign className="text-primary" />,
        value: '$23,456',
        title: 'Monthly Revenue',
        description: 'Total revenue this month',
      },
    ],
  },
};

/**
 * Empty state usage of the StatsBlock component.
 */
export const EmptyState: Story = {
  name: 'Empty State',
  render: (args: StatsBlockProps) => <StatsBlock {...args} />,
  args: {
    stats: [],
  },
};
