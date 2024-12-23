import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Shadcnui/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * Default Alert demonstrating a simple alert message.
 */
export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  ),
};

/**
 * Destructive Alert demonstrating an alert message for destructive actions.
 */
export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Destructive Alert</AlertTitle>
      <AlertDescription>This is a destructive alert message.</AlertDescription>
    </Alert>
  ),
};
