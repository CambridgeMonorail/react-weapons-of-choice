import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesComparison, FeaturesComparisonProps } from './index';

const meta: Meta<typeof FeaturesComparison> = {
  title: 'Shadcnui Blocks/FeaturesComparison',
  component: FeaturesComparison,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'object',
      description: 'Array of feature comparison data',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesComparison>;

const sampleData = [
  { feature: 'Feature 1', basic: true, pro: true, enterprise: true },
  { feature: 'Feature 2', basic: false, pro: true, enterprise: true },
  { feature: 'Feature 3', basic: false, pro: false, enterprise: true },
];

/**
 * Default story for the FeaturesComparison component.
 * This example shows how to use the FeaturesComparison component with sample data.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: FeaturesComparisonProps) => <FeaturesComparison {...args} />,
  args: {
    data: sampleData,
  },
};

/**
 * EmptyData story for the FeaturesComparison component.
 * This example shows how to use the FeaturesComparison component with empty data.
 * It is useful for testing how the component behaves with no data.
 */
export const EmptyData: Story = {
  name: 'Empty Data',
  render: (args: FeaturesComparisonProps) => <FeaturesComparison {...args} />,
  args: {
    data: [],
  },
};

/**
 * CustomData story for the FeaturesComparison component.
 * This example shows how to use the FeaturesComparison component with custom data.
 * It demonstrates the flexibility of the component to handle different datasets.
 */
export const CustomData: Story = {
  name: 'Custom Data',
  render: (args: FeaturesComparisonProps) => <FeaturesComparison {...args} />,
  args: {
    data: [
      { feature: 'Feature A', basic: true, pro: false, enterprise: true },
      { feature: 'Feature B', basic: false, pro: true, enterprise: false },
      { feature: 'Feature C', basic: true, pro: true, enterprise: false },
    ],
  },
};
