import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Shadcnui/Data Display/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the carousel',
    },
    orientation: {
      name: 'Orientation',
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the carousel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/**
 * This story demonstrates the default usage of the Carousel component
 * with horizontal orientation and sample items. It can be used as a reference
 * for how to integrate and customize the Carousel component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    className: '',
    orientation: 'horizontal',
  },
};

/**
 * This story demonstrates the Carousel component with vertical orientation
 * and sample items.
 */
export const Vertical: Story = {
  name: 'Vertical',
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    className: '',
    orientation: 'vertical',
  },
};
