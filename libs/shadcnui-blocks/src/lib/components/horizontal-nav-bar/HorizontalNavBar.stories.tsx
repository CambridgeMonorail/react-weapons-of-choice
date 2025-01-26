import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { HorizontalNavBar } from './index';

const meta: Meta<typeof HorizontalNavBar> = {
  title: 'Shadcnui Blocks/HorizontalNavBar',
  component: HorizontalNavBar,
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

type Story = StoryObj<typeof HorizontalNavBar>;

/**
 * Default HorizontalNavBar with no nested menu items.
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
 * HorizontalNavBar with nested menu items.
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
