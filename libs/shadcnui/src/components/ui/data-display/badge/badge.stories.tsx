import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Shadcnui/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The variant of the badge',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * This story demonstrates the default usage of the Badge component
 * with sample text and default properties. It can be used as a reference
 * for how to integrate and customize the Badge component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Badge {...args}>Default Badge</Badge>,
  args: {
    variant: 'default',
    className: '',
  },
};

/**
 * This story demonstrates the secondary variant of the Badge component
 * with sample text and default properties.
 */
export const Secondary: Story = {
  name: 'Secondary',
  render: (args) => <Badge {...args}>Secondary Badge</Badge>,
  args: {
    variant: 'secondary',
    className: '',
  },
};

/**
 * This story demonstrates the destructive variant of the Badge component
 * with sample text and default properties.
 */
export const Destructive: Story = {
  name: 'Destructive',
  render: (args) => <Badge {...args}>Destructive Badge</Badge>,
  args: {
    variant: 'destructive',
    className: '',
  },
};

/**
 * This story demonstrates the outline variant of the Badge component
 * with sample text and default properties.
 */
export const Outline: Story = {
  name: 'Outline',
  render: (args) => <Badge {...args}>Outline Badge</Badge>,
  args: {
    variant: 'outline',
    className: '',
  },
};
