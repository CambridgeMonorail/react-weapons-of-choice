import * as React from "react"

import { cn } from "../../../../lib/utils"

/**
 * Table component is used to display tabular data with customizable styling.
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

/**
 * TableHeader component is used to display the header section of the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table header.
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - Props for the TableHeader component.
 * @returns {JSX.Element} The TableHeader component.
 *
 * @example
 * <TableHeader className="custom-class">
 *   <TableRow>
 *     <TableHead>Header 1</TableHead>
 *     <TableHead>Header 2</TableHead>
 *     <TableHead>Header 3</TableHead>
 *   </TableRow>
 * </TableHeader>
 */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

/**
 * TableBody component is used to display the body section of the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table body.
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - Props for the TableBody component.
 * @returns {JSX.Element} The TableBody component.
 *
 * @example
 * <TableBody className="custom-class">
 *   <TableRow>
 *     <TableCell>Data 1</TableCell>
 *     <TableCell>Data 2</TableCell>
 *     <TableCell>Data 3</TableCell>
 *   </TableRow>
 *   <TableRow>
 *     <TableCell>Data 4</TableCell>
 *     <TableCell>Data 5</TableCell>
 *     <TableCell>Data 6</TableCell>
 *   </TableRow>
 * </TableBody>
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

/**
 * TableFooter component is used to display the footer section of the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table footer.
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - Props for the TableFooter component.
 * @returns {JSX.Element} The TableFooter component.
 *
 * @example
 * <TableFooter className="custom-class">
 *   <TableRow>
 *     <TableCell>Footer 1</TableCell>
 *     <TableCell>Footer 2</TableCell>
 *     <TableCell>Footer 3</TableCell>
 *   </TableRow>
 * </TableFooter>
 */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

/**
 * TableRow component is used to display a row in the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table row.
 * @param {React.HTMLAttributes<HTMLTableRowElement>} props - Props for the TableRow component.
 * @returns {JSX.Element} The TableRow component.
 *
 * @example
 * <TableRow className="custom-class">
 *   <TableCell>Data 1</TableCell>
 *   <TableCell>Data 2</TableCell>
 *   <TableCell>Data 3</TableCell>
 * </TableRow>
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

/**
 * TableHead component is used to display a header cell in the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table head cell.
 * @param {React.ThHTMLAttributes<HTMLTableCellElement>} props - Props for the TableHead component.
 * @returns {JSX.Element} The TableHead component.
 *
 * @example
 * <TableHead className="custom-class">Header 1</TableHead>
 */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

/**
 * TableCell component is used to display a cell in the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table cell.
 * @param {React.TdHTMLAttributes<HTMLTableCellElement>} props - Props for the TableCell component.
 * @returns {JSX.Element} The TableCell component.
 *
 * @example
 * <TableCell className="custom-class">Data 1</TableCell>
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

/**
 * TableCaption component is used to display a caption for the Table.
 *
 * @param {string} className - Additional Tailwind CSS classes for the table caption.
 * @param {React.HTMLAttributes<HTMLTableCaptionElement>} props - Props for the TableCaption component.
 * @returns {JSX.Element} The TableCaption component.
 *
 * @example
 * <TableCaption className="custom-class">Table Caption</TableCaption>
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
