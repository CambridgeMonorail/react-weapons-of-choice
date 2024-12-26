import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Shadcnui/Input/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the textarea',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the textarea',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/**
 * This story demonstrates the default usage of the Textarea component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Textarea component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Textarea {...args} />,
  args: {
    className: '',
    disabled: false,
    placeholder: 'Enter text',
  },
};

/**
 * This story demonstrates the disabled state of the Textarea component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Textarea {...args} />,
  args: {
    className: '',
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

/**
 * This story demonstrates the usage of the Textarea component with a placeholder.
 */
export const WithPlaceholder: Story = {
  name: 'With Placeholder',
  render: (args) => <Textarea {...args} />,
  args: {
    className: '',
    disabled: false,
    placeholder: 'Enter your text here...',
  },
};
