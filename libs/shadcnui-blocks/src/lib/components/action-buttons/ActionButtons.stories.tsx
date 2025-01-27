import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider } from '@erisfy/shadcnui';
import { ActionButtons, ActionButtonsProps } from './index';
import { Beer, Coffee, Apple } from 'lucide-react';

const meta: Meta<typeof ActionButtons> = {
  title: 'Shadcnui Blocks/ActionButtons',
  component: ActionButtons,
  tags: ['autodocs'],
  argTypes: {
    buttons: { control: 'object' },
  },
};

export default meta;

/**
 * Default story for the ActionButtons component.
 * This example shows how to use the ActionButtons component with different buttons.
 */
export const ActionButtonsDefault: StoryObj<ActionButtonsProps> = {
  name: 'Default ActionButtons',
  render: (args) => (
    <TooltipProvider>
      <ActionButtons {...args} />
    </TooltipProvider>
  ),
  args: {
    buttons: [
      { icon: <Beer />, label: 'Beer', tooltip: 'Click for beer' },
      { icon: <Coffee />, label: 'Coffee', tooltip: 'Click for coffee' },
      { icon: <Apple />, label: 'Apple', tooltip: 'Click for apple' },
    ],
  },
};

/**
 * CustomButtons story for the ActionButtons component.
 * This example shows how to use the ActionButtons component with custom buttons.
 */
export const CustomButtonsActionButtons: StoryObj<ActionButtonsProps> = {
  name: 'Custom Buttons ActionButtons',
  render: (args) => (
    <TooltipProvider>
      <ActionButtons {...args} />
    </TooltipProvider>
  ),
  args: {
    buttons: [
      { icon: <Beer />, label: 'Beer', tooltip: 'Click for beer' },
      { icon: <Coffee />, label: 'Coffee', tooltip: 'Click for coffee' },
      { icon: <Apple />, label: 'Apple', tooltip: 'Click for apple' },
    ],
  },
};
