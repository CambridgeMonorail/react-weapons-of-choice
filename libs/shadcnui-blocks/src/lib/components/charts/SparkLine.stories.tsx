import type { Meta, StoryObj } from '@storybook/react';
import { SparkLine, SparkLineProps } from './SparkLine';

const meta: Meta<typeof SparkLine> = {
  title: 'Shadcnui Blocks/SparkLine',
  component: SparkLine,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'array' },
    strokeColor: { control: 'color' },
    strokeWidth: { control: 'number' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    height: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof SparkLine>;

/**
 * Default story for the SparkLine component.
 * This example shows how to use the component with basic props.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: SparkLineProps) => <SparkLine {...args} />,
  args: {
    data: [10, 20, 30, 40, 50],
    strokeColor: '#4ade80',
    strokeWidth: 2,
    showTooltip: false,
    showGrid: false,
    height: 40,
  },
};

/**
 * CustomClassName story for the SparkLine component.
 * This example shows how to use the component with custom Tailwind CSS classes.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args: SparkLineProps) => <SparkLine {...args} />,
  args: {
    data: [15, 25, 35, 45, 55],
    strokeColor: '#f87171',
    strokeWidth: 3,
    showTooltip: true,
    showGrid: true,
    height: 50,
  },
};
