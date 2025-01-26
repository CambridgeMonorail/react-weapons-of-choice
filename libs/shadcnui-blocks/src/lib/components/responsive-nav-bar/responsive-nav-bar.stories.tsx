import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ResponsiveNavBar } from './index';

const meta: Meta<typeof ResponsiveNavBar> = {
  title: 'Shadcnui Blocks/ResponsiveNavBar',
  component: ResponsiveNavBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ResponsiveNavBar>;

/**
 * Default ResponsiveNavBar with no nested menu items.
 */
export const Default: Story = {
  args: {
    menuItems: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
};

/**
 * ResponsiveNavBar with nested menu items.
 */
export const WithNestedItems: Story = {
  args: {
    menuItems: [
      { label: 'Home', path: '/' },
      { 
        label: 'Services', 
        children: [
          { label: 'Consulting', path: '/services/consulting' },
          { label: 'Development', path: '/services/development' },
        ],
      },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
};
