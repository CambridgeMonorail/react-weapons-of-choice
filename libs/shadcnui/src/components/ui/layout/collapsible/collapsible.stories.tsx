import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Shadcnui/Layout/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      name: 'Open',
      control: 'boolean',
      description: 'Whether the collapsible is open by default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/**
 * This story demonstrates the default usage of the Collapsible component
 * with a trigger and content. It can be used as a reference for how to
 * integrate and customize the Collapsible component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="bg-gray-200 p-2">Toggle</CollapsibleTrigger>
      <CollapsibleContent className="p-2">Content</CollapsibleContent>
    </Collapsible>
  ),
  args: {
    open: false,
  },
};

/**
 * This story demonstrates the Collapsible component in an open state by default.
 */
export const OpenByDefault: Story = {
  name: 'Open By Default',
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger className="bg-gray-200 p-2">Toggle</CollapsibleTrigger>
      <CollapsibleContent className="p-2">Content</CollapsibleContent>
    </Collapsible>
  ),
  args: {
    open: true,
  },
};
