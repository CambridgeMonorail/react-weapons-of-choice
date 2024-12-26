import type { Meta, StoryObj } from '@storybook/react';
import { 
  Sheet, 
  SheetTrigger, 
  SheetClose, 
  SheetPortal, 
  SheetOverlay, 
  SheetContent, 
  SheetHeader, 
  SheetFooter, 
  SheetTitle, 
  SheetDescription 
} from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Shadcnui/Layout/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    open: {
      name: 'Open',
      control: 'boolean',
      description: 'Whether the sheet is open by default',
    },
    side: {
      name: 'Side',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The side of the screen where the sheet appears',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

/**
 * This story demonstrates the default usage of the Sheet component
 * with a trigger and content. It can be used as a reference for how to
 * integrate and customize the Sheet component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div className="p-2">Sheet Content</div>
        <SheetFooter>
          <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    open: false,
    side: 'right',
  },
};

/**
 * This story demonstrates the Sheet component in an open state by default.
 */
export const OpenByDefault: Story = {
  name: 'Open By Default',
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div className="p-2">Sheet Content</div>
        <SheetFooter>
          <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    open: true,
    side: 'right',
  },
};

/**
 * This story demonstrates the Sheet component appearing from the left side of the screen.
 */
export const FromLeft: Story = {
  name: 'From Left',
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div className="p-2">Sheet Content</div>
        <SheetFooter>
          <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    open: false,
    side: 'left',
  },
};

/**
 * This story demonstrates the Sheet component appearing from the top side of the screen.
 */
export const FromTop: Story = {
  name: 'From Top',
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div className="p-2">Sheet Content</div>
        <SheetFooter>
          <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    open: false,
    side: 'top',
  },
};

/**
 * This story demonstrates the Sheet component appearing from the bottom side of the screen.
 */
export const FromBottom: Story = {
  name: 'From Bottom',
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div className="p-2">Sheet Content</div>
        <SheetFooter>
          <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    open: false,
    side: 'bottom',
  },
};
