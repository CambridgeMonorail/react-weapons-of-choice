import { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';
import { Button } from '../../input-controls/button';

const meta: Meta<typeof HoverCard> = {
  title: 'Shadcnui/Feedback/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

/**
 * Default HoverCard demonstrating a simple hover card with a title and description.
 */
export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="text-sm">
          <strong>HoverCard Title</strong>
          <p>This is a simple hover card description.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

/**
 * HoverCard with custom trigger button and additional content.
 */
export const CustomTrigger: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="primary">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="text-sm">
          <strong>Custom HoverCard Title</strong>
          <p>This is a custom hover card description with additional content.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
