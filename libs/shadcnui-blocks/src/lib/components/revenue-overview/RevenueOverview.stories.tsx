import { Meta, StoryObj } from '@storybook/react';
import { RevenueOverview } from './index';

const meta: Meta<typeof RevenueOverview> = {
  title: 'shadcnui blocks/RevenueOverview',
  component: RevenueOverview,
  tags: ['autodocs'],
  argTypes: {
    totalRevenue: { control: 'number' },
    targetRevenue: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof RevenueOverview>;

/**
 * Default story demonstrating the RevenueOverview component with sample data.
 */
export const Default: Story = {
  args: {
    totalRevenue: 500000,
    targetRevenue: 1000000,
  },
};

/**
 * Story demonstrating the RevenueOverview component when the target is achieved.
 */
export const TargetAchieved: Story = {
  args: {
    totalRevenue: 1000000,
    targetRevenue: 1000000,
  },
};

/**
 * Story demonstrating the RevenueOverview component when the revenue exceeds the target.
 */
export const ExceedsTarget: Story = {
  args: {
    totalRevenue: 1200000,
    targetRevenue: 1000000,
  },
};

/**
 * Story demonstrating the RevenueOverview component with zero revenue.
 */
export const ZeroRevenue: Story = {
  args: {
    totalRevenue: 0,
    targetRevenue: 1000000,
  },
};
