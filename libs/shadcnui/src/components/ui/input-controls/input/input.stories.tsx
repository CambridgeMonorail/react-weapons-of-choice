import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Shadcnui/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the input',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the input',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text for the input',
    },
    type: {
      name: 'Type',
      control: 'text',
      description: 'Type of the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * This story demonstrates the default usage of the Input component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Input component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Input {...args} />,
  args: {
    className: '',
    disabled: false,
    placeholder: 'Enter text',
    type: 'text',
  },
};

/**
 * This story demonstrates the disabled state of the Input component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Input {...args} />,
  args: {
    className: '',
    disabled: true,
    placeholder: 'Disabled input',
    type: 'text',
  },
};

/**
 * This story demonstrates the usage of the Input component with a password type.
 */
export const Password: Story = {
  name: 'Password',
  render: (args) => <Input {...args} />,
  args: {
    className: '',
    disabled: false,
    placeholder: 'Enter password',
    type: 'password',
  },
};

/**
 * This story demonstrates the usage of the Input component with an email type.
 */
export const Email: Story = {
  name: 'Email',
  render: (args) => <Input {...args} />,
  args: {
    className: '',
    disabled: false,
    placeholder: 'Enter email',
    type: 'email',
  },
};
