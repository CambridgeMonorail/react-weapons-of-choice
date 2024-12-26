import { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Shadcnui/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

/**
 * Default pagination demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
};

/**
 * Pagination with ellipsis for long page lists.
 */
export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
};
