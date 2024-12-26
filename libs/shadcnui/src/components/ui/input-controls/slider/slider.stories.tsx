import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Shadcnui/Input/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the slider',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disable the slider',
    },
    value: {
      name: 'Value',
      control: 'array',
      description: 'Value of the slider',
    },
    min: {
      name: 'Min',
      control: 'number',
      description: 'Minimum value of the slider',
    },
    max: {
      name: 'Max',
      control: 'number',
      description: 'Maximum value of the slider',
    },
    step: {
      name: 'Step',
      control: 'number',
      description: 'Step value of the slider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * This story demonstrates the default usage of the Slider component
 * with default properties. It can be used as a reference for how to
 * integrate and customize the Slider component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Slider {...args} />,
  args: {
    className: '',
    disabled: false,
    value: [50],
    min: 0,
    max: 100,
    step: 1,
  },
};

/**
 * This story demonstrates the disabled state of the Slider component
 * with default properties.
 */
export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <Slider {...args} />,
  args: {
    className: '',
    disabled: true,
    value: [50],
    min: 0,
    max: 100,
    step: 1,
  },
};

/**
 * This story demonstrates the usage of the Slider component with a range of values.
 */
export const Range: Story = {
  name: 'Range',
  render: (args) => <Slider {...args} />,
  args: {
    className: '',
    disabled: false,
    value: [20, 80],
    min: 0,
    max: 100,
    step: 1,
  },
};
