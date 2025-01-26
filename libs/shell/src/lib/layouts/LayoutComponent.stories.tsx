import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LayoutComponent } from './LayoutComponent';

const meta: Meta<typeof LayoutComponent> = {
  title: 'Layouts/LayoutComponent',
  component: LayoutComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LayoutComponent>;

/**
 * Default layout component story.
 */
export const Default: Story = {
  args: {
    title: 'Default Layout',
    children: <div>Content goes here</div>,
  },
};
