import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Shadcnui/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the avatar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * This story demonstrates the default usage of the Avatar component
 * with a sample image and fallback text. It can be used as a reference
 * for how to integrate and customize the Avatar component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://via.placeholder.com/150" alt="Avatar" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the Avatar component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://via.placeholder.com/150" alt="Avatar" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  args: {
    className: 'border-2 border-primary',
  },
};
