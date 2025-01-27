import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider } from '@erisfy/shadcnui';
import { ActionButton, ActionButtonProps } from './index';
import { Beer, Coffee, Apple } from 'lucide-react';

const meta: Meta<typeof ActionButton> = {
  title: 'Shadcnui Blocks/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'object' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    tooltip: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

/**
 * Default story for the ActionButton component.
 * This example shows how to use the ActionButton component with different icons and labels.
 */
export const DefaultActionButton: Story = {
  name: 'Default ActionButton',
  render: (args: ActionButtonProps) => (
    <TooltipProvider>
      <ActionButton {...args} />
    </TooltipProvider>
  ),
  args: {
    icon: <Beer />,
    label: 'Beer',
    tooltip: 'Click for beer',
  },
};

/**
 * CustomIcon story for the ActionButton component.
 * This example shows how to use the ActionButton component with a custom icon.
 */
export const CustomIconActionButton: Story = {
  name: 'Custom Icon ActionButton',
  render: (args: ActionButtonProps) => (
    <TooltipProvider>
      <ActionButton {...args} />
    </TooltipProvider>
  ),
  args: {
    icon: <Coffee />,
    label: 'Coffee',
    tooltip: 'Click for coffee',
  },
};

/**
 * CustomTooltip story for the ActionButton component.
 * This example shows how to use the ActionButton component with a custom tooltip.
 */
export const CustomTooltipActionButton: Story = {
  name: 'Custom Tooltip ActionButton',
  render: (args: ActionButtonProps) => (
    <TooltipProvider>
      <ActionButton {...args} />
    </TooltipProvider>
  ),
  args: {
    icon: <Apple />,
    label: 'Apple',
    tooltip: 'Click for apple',
  },
};
