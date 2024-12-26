import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Shadcnui/Input/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The variant of the button',
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the button',
    },
    asChild: {
      name: 'As Child',
      control: 'boolean',
      description: 'Render the button as a child component',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * This story demonstrates the default usage of the Button component
 * with sample text and default properties. It can be used as a reference
 * for how to integrate and customize the Button component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Button {...args}>Default Button</Button>,
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};

/**
 * This story demonstrates the destructive variant of the Button component
 * with sample text and default properties.
 */
export const Destructive: Story = {
  name: 'Destructive',
  render: (args) => <Button {...args}>Destructive Button</Button>,
  args: {
    variant: 'destructive',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};

/**
 * This story demonstrates the outline variant of the Button component
 * with sample text and default properties.
 */
export const Outline: Story = {
  name: 'Outline',
  render: (args) => <Button {...args}>Outline Button</Button>,
  args: {
    variant: 'outline',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};

/**
 * This story demonstrates the secondary variant of the Button component
 * with sample text and default properties.
 */
export const Secondary: Story = {
  name: 'Secondary',
  render: (args) => <Button {...args}>Secondary Button</Button>,
  args: {
    variant: 'secondary',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};

/**
 * This story demonstrates the ghost variant of the Button component
 * with sample text and default properties.
 */
export const Ghost: Story = {
  name: 'Ghost',
  render: (args) => <Button {...args}>Ghost Button</Button>,
  args: {
    variant: 'ghost',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};

/**
 * This story demonstrates the link variant of the Button component
 * with sample text and default properties.
 */
export const Link: Story = {
  name: 'Link',
  render: (args) => <Button {...args}>Link Button</Button>,
  args: {
    variant: 'link',
    size: 'default',
    disabled: false,
    asChild: false,
    className: '',
  },
};
