import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Shadcnui/Layout/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      name: 'Ratio',
      control: 'number',
      description: 'The aspect ratio of the container',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

/**
 * This story demonstrates the default usage of the AspectRatio component
 * with a 16:9 ratio. It can be used as a reference for how to integrate
 * and customize the AspectRatio component in different contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <AspectRatio {...args} ratio={16 / 9}>
      <div className="bg-gray-200">16:9 Aspect Ratio</div>
    </AspectRatio>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the AspectRatio component with a 4:3 ratio.
 */
export const FourThree: Story = {
  name: '4:3',
  render: (args) => (
    <AspectRatio {...args} ratio={4 / 3}>
      <div className="bg-gray-200">4:3 Aspect Ratio</div>
    </AspectRatio>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the usage of the AspectRatio component with a 1:1 ratio.
 */
export const OneOne: Story = {
  name: '1:1',
  render: (args) => (
    <AspectRatio {...args} ratio={1}>
      <div className="bg-gray-200">1:1 Aspect Ratio</div>
    </AspectRatio>
  ),
  args: {
    className: '',
  },
};
