import type { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from './index';

const meta: Meta<typeof Logo> = {
  title: 'Shadcnui Blocks/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['shadcn', 'nx', 'pnpm', 'react', 'tailwind', 'storybook'],
      },
    },
    width: { control: 'text' },
    height: { control: 'text' },
    fill: { control: 'color' },
    displayName: { control: 'text' },
    logoClassName: { control: 'text' },
    nameClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

/**
 * Demonstrates the Shadcn logo with default dimensions and color.
 */
export const Shadcn: Story = {
  name: 'Shadcn',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'shadcn',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Nx logo with default dimensions and color.
 */
export const Nx: Story = {
  name: 'Nx',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'nx',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Pnpm logo with default dimensions and color.
 */
export const Pnpm: Story = {
  name: 'Pnpm',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'pnpm',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the React logo with default dimensions and color.
 */
export const React: Story = {
  name: 'React',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'react',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Tailwind logo with default dimensions and color.
 */
export const Tailwind: Story = {
  name: 'Tailwind',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'tailwind',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Storybook logo with default dimensions and color.
 */
export const Storybook: Story = {
  name: 'Storybook',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'storybook',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Logo component with a display name.
 */
export const WithDisplayName: Story = {
  name: 'With Display Name',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'react',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
    displayName: 'React',
  },
};

/**
 * Demonstrates the Logo component with custom class names for logo and name.
 */
export const WithCustomClassNames: Story = {
  name: 'With Custom Class Names',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'tailwind',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
    displayName: 'Tailwind CSS',
    logoClassName: 'custom-logo-class',
    nameClassName: 'custom-name-class',
  },
};

/**
 * Demonstrates the Logo component with custom sizes.
 */
export const CustomSizes: Story = {
  name: 'Custom Sizes',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'shadcn',
    width: '150px',
    height: '150px',
    fill: 'currentColor',
  },
};

/**
 * Demonstrates the Logo component with custom class names for both logo and name.
 */
export const CustomClassNames: Story = {
  name: 'Custom Class Names',
  render: (args: LogoProps) => <Logo {...args} />,
  args: {
    name: 'shadcn',
    width: '100px',
    height: '100px',
    fill: 'currentColor',
    logoClassName: 'custom-logo-class',
    nameClassName: 'custom-name-class',
  },
};
