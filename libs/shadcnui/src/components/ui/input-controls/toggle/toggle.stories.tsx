import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Shadcnui/Input/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the toggle',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the toggle',
    },
    pressed: {
      name: 'Pressed',
      control: 'boolean',
      description: 'Pressed state of the toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * This story demonstrates the default usage of the Toggle component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Toggle component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Toggle {...args}>Default Toggle</Toggle>,
  args: {
    className: '',
    disabled: false,
    pressed: false,
  },
};

/**
 * This story demonstrates the disabled state of the Toggle component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Toggle {...args}>Disabled Toggle</Toggle>,
  args: {
    className: '',
    disabled: true,
    pressed: false,
  },
};

/**
 * This story demonstrates the pressed state of the Toggle component
 * with default properties.
 */
export const Pressed: Story = {
  name: 'Pressed',
  render: (args) => <Toggle {...args}>Pressed Toggle</Toggle>,
  args: {
    className: '',
    disabled: false,
    pressed: true,
  },
};
