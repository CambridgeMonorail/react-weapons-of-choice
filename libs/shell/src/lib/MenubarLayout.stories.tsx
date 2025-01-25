import { Meta, StoryObj } from '@storybook/react';
import { MenubarLayout, MenuItem } from './MenubarLayout';

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

const menuData: MenuItem[] = [
  {
    label: 'File',
    items: [
      { label: 'New Tab', shortcut: '⌘T' },
      { label: 'New Window', shortcut: '⌘N' },
      { label: 'New Incognito Window', disabled: true },
      { type: 'separator' },
      {
        label: 'Share',
        type: 'sub',
        items: [
          { label: 'Email link' },
          { label: 'Messages' },
          { label: 'Notes' },
        ],
      },
      { type: 'separator' },
      { label: 'Print...', shortcut: '⌘P' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', shortcut: '⌘Z' },
      { label: 'Redo', shortcut: '⇧⌘Z' },
      { type: 'separator' },
      {
        label: 'Find',
        type: 'sub',
        items: [
          { label: 'Search the web' },
          { type: 'separator' },
          { label: 'Find...' },
          { label: 'Find Next' },
          { label: 'Find Previous' },
        ],
      },
      { type: 'separator' },
      { label: 'Cut' },
      { label: 'Copy' },
      { label: 'Paste' },
    ],
  },
  {
    label: 'View',
    items: [
      { label: 'Always Show Bookmarks Bar', type: 'checkbox' },
      { label: 'Always Show Full URLs', type: 'checkbox', checked: true },
      { type: 'separator' },
      { label: 'Reload', shortcut: '⌘R', inset: true },
      { label: 'Force Reload', shortcut: '⇧⌘R', inset: true, disabled: true },
      { type: 'separator' },
      { label: 'Toggle Fullscreen', inset: true },
      { type: 'separator' },
      { label: 'Hide Sidebar', inset: true },
    ],
  },
  {
    label: 'Profiles',
    items: [
      {
        type: 'radio',
        value: 'benoit',
        items: [
          { label: 'Andy', value: 'andy' },
          { label: 'Benoit', value: 'benoit' },
          { label: 'Luis', value: 'luis' },
        ],
      },
      { type: 'separator' },
      { label: 'Edit...', inset: true },
      { type: 'separator' },
      { label: 'Add Profile...', inset: true },
    ],
  },
];

/**
 * Default MenubarLayout for desktop view.
 */
export const DesktopView: Story = {
  args: {
    children: <div className="p-4">Main content goes here</div>,
    menuData,
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
    menuData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
