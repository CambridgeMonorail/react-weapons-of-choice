import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../../../lib/utils"
import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

/**
 * Breadcrumb component that provides a navigation aid in web applications.
 */
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

/**
 * BreadcrumbList component that represents a list of breadcrumb items.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbList>
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="#">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="#">Library</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem>
 *     <BreadcrumbPage>Data</BreadcrumbPage>
 *   </BreadcrumbItem>
 * </BreadcrumbList>
 * ```
 */
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

/**
 * BreadcrumbItem component that represents a single item within a breadcrumb list.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbItem>
 *   <BreadcrumbLink href="#">Home</BreadcrumbLink>
 * </BreadcrumbItem>
 * ```
 */
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

/**
 * BreadcrumbLink component that represents a link within a breadcrumb item.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbLink href="#">Home</BreadcrumbLink>
 * ```
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

/**
 * BreadcrumbPage component that represents the current page within a breadcrumb.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbPage>Data</BreadcrumbPage>
 * ```
 */
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

/**
 * BreadcrumbSeparator component that represents a separator between breadcrumb items.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbSeparator />
 * ```
 */
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

/**
 * BreadcrumbEllipsis component that represents an ellipsis for long breadcrumb paths.
 * 
 * @component
 * @example
 * ```tsx
 * <BreadcrumbEllipsis />
 * ```
 */
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
