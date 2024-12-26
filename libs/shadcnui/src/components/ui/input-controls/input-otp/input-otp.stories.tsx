import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'Shadcnui/Input/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the InputOTP',
    },
    containerClassName: {
      name: 'Container Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the container',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the InputOTP',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

/**
 * This story demonstrates the default usage of the InputOTP component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the InputOTP component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  args: {
    className: '',
    containerClassName: '',
    disabled: false,
  },
};

/**
 * This story demonstrates the disabled state of the InputOTP component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  args: {
    className: '',
    containerClassName: '',
    disabled: true,
  },
};

/**
 * This story demonstrates the usage of the InputOTP component with a separator
 * between the slots.
 */
export const WithSeparator: Story = {
  name: 'With Separator',
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSeparator />
        <InputOTPSlot index={1} />
        <InputOTPSeparator />
        <InputOTPSlot index={2} />
        <InputOTPSeparator />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  args: {
    className: '',
    containerClassName: '',
    disabled: false,
  },
};
