import type { Meta, StoryObj } from '@storybook/react';
import { MenubarLayout, MenuItem } from './MenubarLayout';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof MenubarLayout> = {
  title: 'Shell/MenubarLayout',
  component: MenubarLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ height: '400px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenubarLayout>;

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Consulting', path: '/services/consulting' },
      { label: 'Development', path: '/services/development' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

/**
 * Default story for the MenubarLayout component.
 * Demonstrates the layout with a set of menu items and some children content.
 */
export const Default: Story = {
  args: {
    menuItems,
    children: <div className="p-4">Main content goes here</div>,
    mode: 'below-header',
  },
};

/**
 * HeaderMode story for the MenubarLayout component.
 * Demonstrates the layout with the responsive nav bar in the header.
 */
export const HeaderMode: Story = {
  args: {
    menuItems,
    children: <div className="p-4">Main content goes here</div>,
    mode: 'header',
  },
};
