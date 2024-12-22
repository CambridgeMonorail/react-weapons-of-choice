import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from './table';

const meta: Meta<typeof Table> = {
  title: 'Shadcnui/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the table',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/**
 * This story demonstrates the default usage of the Table component
 * with a header, body, and footer. It can be used as a reference
 * for how to integrate and customize the Table component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
          <TableCell>Data 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data 4</TableCell>
          <TableCell>Data 5</TableCell>
          <TableCell>Data 6</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {
    className: '',
  },
};

/**
 * This story demonstrates the Table component with a custom class name
 * to apply additional styling.
 */
export const CustomClassName: Story = {
  name: 'Custom Class Name',
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
          <TableCell>Data 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data 4</TableCell>
          <TableCell>Data 5</TableCell>
          <TableCell>Data 6</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {
    className: 'border-2 border-primary',
  },
};
