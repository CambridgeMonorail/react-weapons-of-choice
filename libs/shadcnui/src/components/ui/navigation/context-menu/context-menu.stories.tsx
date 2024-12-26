import { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup } from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Shadcnui/Navigation/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

/**
 * Default context menu demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Context menu with checkbox items.
 */
export const WithCheckboxItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked>Checkbox Item 1</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Checkbox Item 2</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Context menu with radio items.
 */
export const WithRadioItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuRadioGroup value="item-1">
          <ContextMenuRadioItem value="item-1">Radio Item 1</ContextMenuRadioItem>
          <ContextMenuRadioItem value="item-2">Radio Item 2</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Context menu with sub menu.
 */
export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Sub Menu</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Sub Item 1</ContextMenuItem>
            <ContextMenuItem>Sub Item 2</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Context menu with labels and separators.
 */
export const WithLabelsAndSeparators: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Label 1</ContextMenuLabel>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Label 2</ContextMenuLabel>
        <ContextMenuItem>Item 2</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * Context menu with shortcuts.
 */
export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Right click here</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Item 1
          <ContextMenuShortcut>⌘1</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Item 2
          <ContextMenuShortcut>⌘2</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
