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
