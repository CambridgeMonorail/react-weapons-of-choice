import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';


const meta: Meta<typeof Checkbox> = {
  title: 'Shadcnui/Input/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the checkbox',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      description: 'Checked state of the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * This story demonstrates the default usage of the Checkbox component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Checkbox component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Checkbox {...args} />,
  args: {
    className: '',
    disabled: false,
    checked: false,
  },
};

/**
 * This story demonstrates the disabled state of the Checkbox component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Checkbox {...args} />,
  args: {
    className: '',
    disabled: true,
    checked: false,
  },
};

/**
 * This story demonstrates the checked state of the Checkbox component
 * with default properties.
 */
export const Checked: Story = {
  name: 'Checked',
  render: (args) => <Checkbox {...args} />,
  args: {
    className: '',
    disabled: false,
    checked: true,
  },
};
