import { cn } from "../../../../lib/utils"
import * as React from "react"

/**
 * Card component is a flexible content container with various styling options.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[var(--radius)] border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * CardHeader component is used to display the header of the Card.
 *
 * @param {string} className - Additional Tailwind CSS classes for the card header.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the CardHeader component.
 * @returns {JSX.Element} The CardHeader component.
 *
 * @example
 * <CardHeader className="custom-class">
 *   <CardTitle>Card Title</CardTitle>
 *   <CardDescription>Card Description</CardDescription>
 * </CardHeader>
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * CardTitle component is used to display the title of the Card.
 *
 * @param {string} className - Additional Tailwind CSS classes for the card title.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the CardTitle component.
 * @returns {JSX.Element} The CardTitle component.
 *
 * @example
 * <CardTitle className="custom-class">Card Title</CardTitle>
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * CardDescription component is used to display the description of the Card.
 *
 * @param {string} className - Additional Tailwind CSS classes for the card description.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the CardDescription component.
 * @returns {JSX.Element} The CardDescription component.
 *
 * @example
 * <CardDescription className="custom-class">Card Description</CardDescription>
 */
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * CardContent component is used to display the content of the Card.
 *
 * @param {string} className - Additional Tailwind CSS classes for the card content.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the CardContent component.
 * @returns {JSX.Element} The CardContent component.
 *
 * @example
 * <CardContent className="custom-class">
 *   <p>This is the content of the card.</p>
 * </CardContent>
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * CardFooter component is used to display the footer of the Card.
 *
 * @param {string} className - Additional Tailwind CSS classes for the card footer.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the CardFooter component.
 * @returns {JSX.Element} The CardFooter component.
 *
 * @example
 * <CardFooter className="custom-class">
 *   <p>Card Footer</p>
 * </CardFooter>
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
