import { Meta, StoryObj } from '@storybook/react';
import { MenubarLayout } from './MenubarLayout';

const meta: Meta<typeof MenubarLayout> = {
  title: 'Shell/MenubarLayout',
  component: MenubarLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MenubarLayout>;

/**
 * Default MenubarLayout for desktop view.
 */
export const DesktopView: Story = {
  args: {
    children: <div className="p-4">Main content goes here</div>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

/**
 * MenubarLayout for mobile view.
 */
export const MobileView: Story = {
  args: {
    children: <div className="p-4">Main content goes here</div>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
