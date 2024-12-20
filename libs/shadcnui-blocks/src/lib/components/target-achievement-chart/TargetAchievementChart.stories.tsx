import type { Meta, StoryObj } from '@storybook/react';
import { TargetAchievementChart } from './index';
import type { TargetAchievementChartProps } from './index';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const meta: Meta<typeof TargetAchievementChart> = {
  title: 'Shadcnui Blocks/TargetAchievementChart',
  component: TargetAchievementChart,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'object',
      description: 'Array of target achievement data to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TargetAchievementChart>;

const sampleData = [
  { state: 'California', targetAchieved: 90 },
  { state: 'Texas', targetAchieved: 102 },
  { state: 'New York', targetAchieved: 96 },
];

/**
 * This example shows how to use the TargetAchievementChart component to display a bar chart
 * of target achievement data. It is useful for visualizing performance metrics by state.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: TargetAchievementChartProps) => (
    <TooltipProvider>
      <TargetAchievementChart {...args} />
    </TooltipProvider>
  ),
  args: {
    data: sampleData,
  },
};

/**
 * This example shows how to use the TargetAchievementChart component with empty data.
 * It is useful for testing the component's behavior when no data is provided.
 */
export const EmptyData: Story = {
  name: 'Empty Data',
  render: (args: TargetAchievementChartProps) => (
    <TooltipProvider>
      <TargetAchievementChart {...args} />
    </TooltipProvider>
  ),
  args: {
    data: [],
  },
};

/**
 * This example shows how to use the TargetAchievementChart component with custom data.
 * It is useful for testing the component's behavior with different sets of data.
 */
export const CustomData: Story = {
  name: 'Custom Data',
  render: (args: TargetAchievementChartProps) => (
    <TooltipProvider>
      <TargetAchievementChart {...args} />
    </TooltipProvider>
  ),
  args: {
    data: [
      { state: 'Florida', targetAchieved: 98 },
      { state: 'Illinois', targetAchieved: 94 },
    ],
  },
};
