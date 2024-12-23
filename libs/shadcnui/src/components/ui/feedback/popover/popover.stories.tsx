import { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from '../../input-controls/button';

const meta: Meta<typeof Popover> = {
  title: 'Shadcnui/Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * Default Popover demonstrating a simple popover with a trigger button.
 */
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a simple popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};

/**
 * Popover with custom trigger button and additional content.
 */
export const CustomTrigger: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">Open Custom Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a custom popover content with additional information.</p>
      </PopoverContent>
    </Popover>
  ),
};
