import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Shadcnui/Input/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the radio group',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the radio group',
    },
    value: {
      name: 'Value',
      control: 'text',
      description: 'Value of the selected radio item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/**
 * This story demonstrates the default usage of the RadioGroup component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the RadioGroup component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="1" />
      <RadioGroupItem value="2" />
      <RadioGroupItem value="3" />
    </RadioGroup>
  ),
  args: {
    className: '',
    disabled: false,
    value: '1',
  },
};

/**
 * This story demonstrates the disabled state of the RadioGroup component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="1" />
      <RadioGroupItem value="2" />
      <RadioGroupItem value="3" />
    </RadioGroup>
  ),
  args: {
    className: '',
    disabled: true,
    value: '1',
  },
};

/**
 * This story demonstrates the usage of the RadioGroup component with a different
 * selected value.
 */
export const SelectedValue: Story = {
  name: 'Selected Value',
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="1" />
      <RadioGroupItem value="2" />
      <RadioGroupItem value="3" />
    </RadioGroup>
  ),
  args: {
    className: '',
    disabled: false,
    value: '2',
  },
};
