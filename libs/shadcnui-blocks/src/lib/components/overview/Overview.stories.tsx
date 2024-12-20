import type { Meta, StoryObj } from '@storybook/react';
import { Overview } from './index';

const meta: Meta<typeof Overview> = {
  title: 'Shadcnui Blocks/Overview',
  component: Overview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Overview>;

/**
 * This example shows the default usage of the Overview component.
 * It demonstrates how to display a chart with predefined data.
 */
export const Default: Story = {
  name: 'Default',
  render: () => <Overview />,
};

/**
 * This example shows how to use the Overview component with custom data.
 * It is useful when you want to display a chart with different data points.
 * 
 * @example
 * const customData = [
 *   { month: 'July', desktop: 150, mobile: 100 },
 *   { month: 'August', desktop: 200, mobile: 150 },
 *   { month: 'September', desktop: 250, mobile: 200 },
 * ];
 * 
 * return <Overview data={customData} />;
 */
export const CustomData: Story = {
  name: 'Custom Data',
  render: () => {
    const customData = [
      { month: 'July', desktop: 150, mobile: 100 },
      { month: 'August', desktop: 200, mobile: 150 },
      { month: 'September', desktop: 250, mobile: 200 },
    ];

    return <Overview data={customData} />;
  },
};
