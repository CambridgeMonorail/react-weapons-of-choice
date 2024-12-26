import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Shadcnui/Input/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the toggle group',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the toggle group',
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Value of the selected toggle item',
    },
    type: {
      name: 'Type',
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Type of the toggle group',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

/**
 * This story demonstrates the default usage of the ToggleGroup component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the ToggleGroup component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    className: '',
    disabled: false,
    value: '1',
    type: 'single',
  },
};

/**
 * This story demonstrates the disabled state of the ToggleGroup component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    className: '',
    disabled: true,
    value: '1',
    type: 'single',
  },
};

/**
 * This story demonstrates the usage of the ToggleGroup component with a different
 * selected value.
 */
export const SelectedValue: Story = {
  name: 'Selected Value',
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    className: '',
    disabled: false,
    value: '2',
    type: 'single',
  },
};
