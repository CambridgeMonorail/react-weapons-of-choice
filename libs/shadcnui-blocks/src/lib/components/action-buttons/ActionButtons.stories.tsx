import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton, ActionButtons, ActionButtonProps, ActionButtonsProps } from './index';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';

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
export const Default: Story = {
  name: 'Default',
  render: (args: ActionButtonProps) => <ActionButton {...args} />,
  args: {
    icon: <FaBeer />,
    label: 'Beer',
    tooltip: 'Click for beer',
  },
};

/**
 * CustomIcon story for the ActionButton component.
 * This example shows how to use the ActionButton component with a custom icon.
 */
export const CustomIcon: Story = {
  name: 'Custom Icon',
  render: (args: ActionButtonProps) => <ActionButton {...args} />,
  args: {
    icon: <FaCoffee />,
    label: 'Coffee',
    tooltip: 'Click for coffee',
  },
};

/**
 * CustomTooltip story for the ActionButton component.
 * This example shows how to use the ActionButton component with a custom tooltip.
 */
export const CustomTooltip: Story = {
  name: 'Custom Tooltip',
  render: (args: ActionButtonProps) => <ActionButton {...args} />,
  args: {
    icon: <FaApple />,
    label: 'Apple',
    tooltip: 'Click for apple',
  },
};

const metaButtons: Meta<typeof ActionButtons> = {
  title: 'Shadcnui Blocks/ActionButtons',
  component: ActionButtons,
  tags: ['autodocs'],
  argTypes: {
    buttons: { control: 'object' },
  },
};

export const ActionButtonsDefault: StoryObj<ActionButtonsProps> = {
  name: 'Default',
  render: (args) => <ActionButtons {...args} />,
  args: {
    buttons: [
      { icon: <FaBeer />, label: 'Beer', tooltip: 'Click for beer' },
      { icon: <FaCoffee />, label: 'Coffee', tooltip: 'Click for coffee' },
      { icon: <FaApple />, label: 'Apple', tooltip: 'Click for apple' },
    ],
  },
};

/**
 * CustomButtons story for the ActionButtons component.
 * This example shows how to use the ActionButtons component with custom buttons.
 */
export const CustomButtons: StoryObj<ActionButtonsProps> = {
  name: 'Custom Buttons',
  render: (args) => <ActionButtons {...args} />,
  args: {
    buttons: [
      { icon: <FaBeer />, label: 'Beer', tooltip: 'Click for beer' },
      { icon: <FaCoffee />, label: 'Coffee', tooltip: 'Click for coffee' },
      { icon: <FaApple />, label: 'Apple', tooltip: 'Click for apple' },
    ],
  },
};
