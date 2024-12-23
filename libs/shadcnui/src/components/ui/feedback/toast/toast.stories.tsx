import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose, ToastAction } from './toast';
import { Button } from '../../input-controls/button';

const meta: Meta<typeof Toast> = {
  title: 'Shadcnui/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * Default Toast demonstrating a simple toast notification.
 */
export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Button onClick={() => { /* logic to show toast */ }}>Show Toast</Button>
      <Toast>
        <ToastTitle>Default Toast</ToastTitle>
        <ToastDescription>This is a default toast message.</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

/**
 * Destructive Toast demonstrating a toast notification for destructive actions.
 */
export const Destructive: Story = {
  render: () => (
    <ToastProvider>
      <Button onClick={() => { /* logic to show toast */ }}>Show Destructive Toast</Button>
      <Toast variant="destructive">
        <ToastTitle>Destructive Toast</ToastTitle>
        <ToastDescription>This is a destructive toast message.</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

/**
 * Toast with action demonstrating a toast notification with an action button.
 */
export const WithAction: Story = {
  render: () => (
    <ToastProvider>
      <Button onClick={() => { /* logic to show toast */ }}>Show Toast with Action</Button>
      <Toast>
        <ToastTitle>Toast with Action</ToastTitle>
        <ToastDescription>This toast has an action button.</ToastDescription>
        <ToastAction asChild>
          <Button variant="primary">Undo</Button>
        </ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};
