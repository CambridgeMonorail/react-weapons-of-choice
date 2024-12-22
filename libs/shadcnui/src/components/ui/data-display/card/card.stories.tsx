import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';

const meta: Meta<typeof Card> = {
  title: 'Shadcnui/Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * This story demonstrates the default usage of the Card component
 * with a header, content, and footer. It can be used as a reference
 * for how to integrate and customize the Card component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the Card component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
  args: {
    className: 'border-2 border-primary',
  },
};
