import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Shadcnui/Layout/Resizable',
  component: ResizablePanelGroup,
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
type Story = StoryObj<typeof ResizablePanelGroup>;

/**
 * This story demonstrates the default usage of the ResizablePanelGroup component
 * with ResizablePanel and ResizableHandle. It can be used as a reference for how to
 * integrate and customize the ResizablePanelGroup component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 2</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the ResizablePanelGroup component with vertical orientation.
 */
export const Vertical: Story = {
  name: 'Vertical',
  render: (args) => (
    <ResizablePanelGroup {...args} className="flex-col">
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 2</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the ResizablePanelGroup component with multiple panels.
 */
export const MultiplePanels: Story = {
  name: 'Multiple Panels',
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 2</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="bg-gray-200 p-4">Panel 3</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: {
    className: '',
  },
};
