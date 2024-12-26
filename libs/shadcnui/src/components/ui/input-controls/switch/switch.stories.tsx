import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Shadcnui/Input/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the switch',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the switch',
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      description: 'Checked state of the switch',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/**
 * This story demonstrates the default usage of the Switch component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Switch component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Switch {...args} />,
  args: {
    className: '',
    disabled: false,
    checked: false,
  },
};

/**
 * This story demonstrates the disabled state of the Switch component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Switch {...args} />,
  args: {
    className: '',
    disabled: true,
    checked: false,
  },
};

/**
 * This story demonstrates the checked state of the Switch component
 * with default properties.
 */
export const Checked: Story = {
  name: 'Checked',
  render: (args) => <Switch {...args} />,
  args: {
    className: '',
    disabled: false,
    checked: true,
  },
};
