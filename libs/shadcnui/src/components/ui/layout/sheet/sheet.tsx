"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"

import { Cross2Icon } from "@radix-ui/react-icons"
import { cn } from "../../../../lib/utils"

/**
 * Sheet component.
 *
 * This component provides a sheet dialog that can be used to display content
 * in a modal-like overlay.
 *
 * @param {boolean} open - Whether the sheet is open by default.
 * @param {React.ReactNode} children - The content to be rendered inside the sheet.
 *
 * @example
 * <Sheet open={true}>
 *   <SheetTrigger>Open Sheet</SheetTrigger>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitle>Sheet Title</SheetTitle>
 *       <SheetDescription>Sheet Description</SheetDescription>
 *     </SheetHeader>
 *     <div>Sheet Content</div>
 *     <SheetFooter>
 *       <SheetClose>Close</SheetClose>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 */
const Sheet = SheetPrimitive.Root

/**
 * SheetTrigger component.
 *
 * This component is used to trigger the opening of the sheet.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the trigger.
 * @param {string} className - Additional Tailwind CSS classes for the trigger.
 *
 * @example
 * <SheetTrigger className="bg-gray-200 p-2">Open Sheet</SheetTrigger>
 */
const SheetTrigger = SheetPrimitive.Trigger

/**
 * SheetClose component.
 *
 * This component is used to close the sheet.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the close button.
 * @param {string} className - Additional Tailwind CSS classes for the close button.
 *
 * @example
 * <SheetClose className="bg-gray-200 p-2">Close</SheetClose>
 */
const SheetClose = SheetPrimitive.Close

/**
 * SheetPortal component.
 *
 * This component provides a portal for rendering the sheet content outside the DOM hierarchy.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the portal.
 *
 * @example
 * <SheetPortal>
 *   <SheetContent>Sheet Content</SheetContent>
 * </SheetPortal>
 */
const SheetPortal = SheetPrimitive.Portal

/**
 * SheetOverlay component.
 *
 * This component provides an overlay for the sheet.
 *
 * @param {string} className - Additional Tailwind CSS classes for the overlay.
 *
 * @example
 * <SheetOverlay className="bg-black/80" />
 */
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

/**
 * SheetContent component.
 *
 * This component provides the content for the sheet.
 *
 * @param {string} side - The side of the screen where the sheet appears (top, bottom, left, right).
 * @param {string} className - Additional Tailwind CSS classes for the content.
 * @param {React.ReactNode} children - The content to be rendered inside the sheet.
 *
 * @example
 * <SheetContent side="right" className="p-4">
 *   <div>Sheet Content</div>
 * </SheetContent>
 */
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

/**
 * SheetHeader component.
 *
 * This component provides the header for the sheet.
 *
 * @param {string} className - Additional Tailwind CSS classes for the header.
 * @param {React.ReactNode} children - The content to be rendered inside the header.
 *
 * @example
 * <SheetHeader className="p-4">
 *   <SheetTitle>Sheet Title</SheetTitle>
 *   <SheetDescription>Sheet Description</SheetDescription>
 * </SheetHeader>
 */
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

/**
 * SheetFooter component.
 *
 * This component provides the footer for the sheet.
 *
 * @param {string} className - Additional Tailwind CSS classes for the footer.
 * @param {React.ReactNode} children - The content to be rendered inside the footer.
 *
 * @example
 * <SheetFooter className="p-4">
 *   <SheetClose>Close</SheetClose>
 * </SheetFooter>
 */
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

/**
 * SheetTitle component.
 *
 * This component provides the title for the sheet.
 *
 * @param {string} className - Additional Tailwind CSS classes for the title.
 * @param {React.ReactNode} children - The content to be rendered inside the title.
 *
 * @example
 * <SheetTitle className="text-lg font-semibold">Sheet Title</SheetTitle>
 */
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

/**
 * SheetDescription component.
 *
 * This component provides the description for the sheet.
 *
 * @param {string} className - Additional Tailwind CSS classes for the description.
 * @param {React.ReactNode} children - The content to be rendered inside the description.
 *
 * @example
 * <SheetDescription className="text-sm">Sheet Description</SheetDescription>
 */
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
