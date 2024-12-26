import { Meta, StoryObj } from '@storybook/react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuCheckboxItem, 
  DropdownMenuRadioItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuShortcut, 
  DropdownMenuSub, 
  DropdownMenuSubContent, 
  DropdownMenuSubTrigger 
} from './dropdown-menu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Shadcnui/Navigation/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

/**
 * Default dropdown menu demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with checkbox items.
 */
export const WithCheckboxItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked>Checkbox Item 1</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Checkbox Item 2</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with radio items.
 */
export const WithRadioItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div role="radiogroup">
          <DropdownMenuRadioItem value="item-1">Radio Item 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="item-2">Radio Item 2</DropdownMenuRadioItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with sub menu.
 */
export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sub Menu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
            <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with labels and separators.
 */
export const WithLabelsAndSeparators: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Label 1</DropdownMenuLabel>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Label 2</DropdownMenuLabel>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with shortcuts.
 */
export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>Click here</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Item 1
          <DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Item 2
          <DropdownMenuShortcut>⌘2</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
