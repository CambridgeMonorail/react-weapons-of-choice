import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';
import { Home, User, Settings } from 'lucide-react';

const meta: Meta<typeof Header> = {
  title: 'Landing/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    actionButtonsProps: {
      name: 'Action Buttons Props',
      control: 'array',
      description: 'An array of action buttons to display in the header',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional class names to apply to the header element',
    },
    title: {
      name: 'Title',
      control: 'text',
      description: 'Title to display next to the logo',
    },
    centerContent: {
      name: 'Center Content',
      control: 'text',
      description: 'Content to display in the center of the header',
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['primary', 'card', 'secondary', 'muted', 'accent', 'destructive', 'sidebar'],
      description: 'Variant of the header styling',
    },
    logoIcon: {
      name: 'Logo Icon',
      control: 'none',
      description: 'Icon to display as the logo',
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
    actionButtonsProps: [{ icon: <Home />, label: 'Home' }],
    title: 'MY APPLICATION',
    centerContent: <div className="text-center">Center Content</div>,
    variant: 'primary',
    logoIcon: <Home />,
  },
};

/**
 * Demonstrates the Header component with multiple action buttons.
 */
export const MultipleActionButtons: Story = {
  name: 'Multiple Action Buttons',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    variant: 'secondary',
  },
};

/**
 * Demonstrates the Header component with additional class names for customization.
 */
export const CustomClassNames: Story = {
  name: 'Custom Class Names',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    className: 'bg-gray-800 text-white',
    variant: 'muted',
  },
};

/**
 * Demonstrates the responsive layout of the Header component.
 */
export const ResponsiveLayout: Story = {
  name: 'Responsive Layout',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    variant: 'accent',
  },
};

/**
 * Demonstrates the Header component with a title.
 */
export const WithTitle: Story = {
  name: 'With Title',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    title: 'MY APPLICATION',
    variant: 'card',
  },
};

/**
 * Demonstrates the Header component with center content.
 */
export const WithCenterContent: Story = {
  name: 'With Center Content',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    centerContent: <div className="text-center">Center Content</div>,
    variant: 'destructive',
  },
};

/**
 * Demonstrates the Header component with no action buttons.
 */
export const NoActionButtons: Story = {
  name: 'No Action Buttons',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [],
    variant: 'sidebar',
  },
};

/**
 * Demonstrates the Header component with a different logo.
 */
export const DifferentLogo: Story = {
  name: 'Different Logo',
  render: (args) => <Header {...args} />,
  args: {
    actionButtonsProps: [
      { icon: <Home />, label: 'Home' },
      { icon: <User />, label: 'User' },
      { icon: <Settings />, label: 'Settings' },
    ],
    logoIcon: <Home />,
    variant: 'primary',
  },
};
