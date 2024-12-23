import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from './dialog';
import { Button } from '../../input-controls/button';

const meta: Meta<typeof Dialog> = {
  title: 'Shadcnui/Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Default Dialog demonstrating a simple dialog with a title and description.
 */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a simple dialog description.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Dialog with custom trigger button and additional content.
 */
export const CustomTrigger: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Custom Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Custom Dialog Title</DialogTitle>
          <DialogDescription>
            This is a custom dialog description with additional content.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
