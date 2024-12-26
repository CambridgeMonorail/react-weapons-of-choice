import { Meta, StoryObj } from '@storybook/react';
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from './command';

const meta: Meta<typeof Command> = {
  title: 'Shadcnui/Navigation/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Command>;

/**
 * Default command demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

/**
 * Command with dialog.
 */
export const WithDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};

/**
 * Command with shortcuts.
 */
export const WithShortcuts: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Item 1
            <CommandShortcut>⌘1</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Item 2
            <CommandShortcut>⌘2</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

/**
 * Command with separator.
 */
export const WithSeparator: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="More Suggestions">
          <CommandItem>Item 3</CommandItem>
          <CommandItem>Item 4</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
