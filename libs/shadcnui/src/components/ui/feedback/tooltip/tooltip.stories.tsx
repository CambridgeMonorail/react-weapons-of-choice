import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';
import { Button } from '../../input-controls/button';

const meta: Meta<typeof Tooltip> = {
  title: 'Shadcnui/Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Default Tooltip demonstrating a simple tooltip message.
 */
export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          This is a default tooltip message.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * Tooltip with custom trigger button and additional content.
 */
export const CustomTrigger: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          This is a custom tooltip message with additional content.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
