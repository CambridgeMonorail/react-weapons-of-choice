import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';
import { Logo } from '@rwoc/shadcnui-blocks';
import { ActionButtons } from '@rwoc/shadcnui-blocks';
import { Button } from '@rwoc/shadcnui';
import { Home, User, Settings } from 'lucide-react';

const meta: Meta<typeof Header> = {
  title: 'Landing/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    logo: {
      name: 'Logo',
      control: 'object',
      description: 'The logo to display in the header',
    },
    actionButtons: {
      name: 'Action Buttons',
      control: 'array',
      description: 'An array of action buttons to display in the header',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional class names to apply to the header element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

/**
 * Demonstrates the Header component with a basic logo and a single action button.
 */
export const Basic: Story = {
  name: 'Basic',
  render: (args) => <Header {...args} />,
  args: {
    logo: <Logo name="react" />,
    actionButtons: [<Button variant="ghost" size="icon"><Home /></Button>],
  },
};

/**
 * Demonstrates the Header component with multiple action buttons.
 */
export const MultipleActionButtons: Story = {
  name: 'Multiple Action Buttons',
  render: (args) => <Header {...args} />,
  args: {
    logo: <Logo name="react" />,
    actionButtons: [
      <Button variant="ghost" size="icon"><Home /></Button>,
      <Button variant="ghost" size="icon"><User /></Button>,
      <Button variant="ghost" size="icon"><Settings /></Button>,
    ],
  },
};

/**
 * Demonstrates the Header component with additional class names for customization.
 */
export const CustomClassNames: Story = {
  name: 'Custom Class Names',
  render: (args) => <Header {...args} />,
  args: {
    logo: <Logo name="react" />,
    actionButtons: [
      <Button variant="ghost" size="icon"><Home /></Button>,
      <Button variant="ghost" size="icon"><User /></Button>,
      <Button variant="ghost" size="icon"><Settings /></Button>,
    ],
    className: 'bg-gray-800 text-white',
  },
};

/**
 * Demonstrates the responsive layout of the Header component.
 */
export const ResponsiveLayout: Story = {
  name: 'Responsive Layout',
  render: (args) => <Header {...args} />,
  args: {
    logo: <Logo name="react" />,
    actionButtons: [
      <Button variant="ghost" size="icon"><Home /></Button>,
      <Button variant="ghost" size="icon"><User /></Button>,
      <Button variant="ghost" size="icon"><Settings /></Button>,
    ],
  },
};
