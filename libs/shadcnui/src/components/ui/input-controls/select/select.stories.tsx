import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator } from './select';

const meta: Meta<typeof Select> = {
  title: 'Shadcnui/Input/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the select',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the select',
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Value of the selected item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * This story demonstrates the default usage of the Select component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Select component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: '',
    disabled: false,
    value: '',
  },
};

/**
 * This story demonstrates the disabled state of the Select component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: '',
    disabled: true,
    value: '',
  },
};

/**
 * This story demonstrates the usage of the Select component with a different
 * selected value.
 */
export const SelectedValue: Story = {
  name: 'Selected Value',
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: '',
    disabled: false,
    value: '2',
  },
};
