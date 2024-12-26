import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Shadcnui/Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

/**
 * This story demonstrates the default usage of the ScrollArea component
 * with a vertical scrollbar. It can be used as a reference for how to
 * integrate and customize the ScrollArea component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <ScrollArea {...args} className="h-64 w-64">
      <div className="h-96 w-full bg-gray-200">Scrollable Content</div>
    </ScrollArea>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the ScrollArea component with a horizontal scrollbar.
 */
export const Horizontal: Story = {
  name: 'Horizontal',
  render: (args) => (
    <ScrollArea {...args} className="h-64 w-64">
      <div className="h-full w-96 bg-gray-200">Scrollable Content</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the ScrollArea component with both vertical and horizontal scrollbars.
 */
export const Both: Story = {
  name: 'Both',
  render: (args) => (
    <ScrollArea {...args} className="h-64 w-64">
      <div className="h-96 w-96 bg-gray-200">Scrollable Content</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  args: {
    className: '',
  },
};
