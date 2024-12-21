import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, ChartTooltip, ChartLegend, ChartTooltipContent, ChartLegendContent } from './chart';

const meta: Meta<typeof ChartContainer> = {
  title: 'Shadcnui/Data Display/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the chart container',
    },
    config: {
      name: 'Config',
      control: 'object',
      description: 'Configuration for the chart',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

/**
 * This story demonstrates the default usage of the ChartContainer component
 * with a sample configuration and default properties. It can be used as a reference
 * for how to integrate and customize the ChartContainer component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <ChartContainer {...args}>
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
    </ChartContainer>
  ),
  args: {
    className: '',
    config: {
      sampleData: {
        label: 'Sample Data',
        color: '#8884d8',
      },
    },
  },
};

/**
 * This story demonstrates the ChartContainer component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => (
    <ChartContainer {...args}>
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
    </ChartContainer>
  ),
  args: {
    className: 'border-2 border-primary',
    config: {
      sampleData: {
        label: 'Sample Data',
        color: '#8884d8',
      },
    },
  },
};
