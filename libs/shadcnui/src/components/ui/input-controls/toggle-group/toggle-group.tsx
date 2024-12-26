import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "../../../../lib/utils"
import { toggleVariants } from "../toggle/toggle"

/**
 * ToggleGroup component.
 *
 * This component renders a group of toggle buttons with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the toggle group.
 * @param {string} variant - Variant of the toggle buttons.
 * @param {string} size - Size of the toggle buttons.
 * @param {React.ReactNode} children - Child elements to be rendered within the toggle group.
 * @param {string} type - Type of the toggle group.
 *
 * @example
 * <ToggleGroup className="custom-class" variant="default" size="default" type="single">
 *   <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
 *   <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
 *   <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
 * </ToggleGroup>
 */
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & { type: "single" | "multiple" }
>(({ className, variant, size, type, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    type={type}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

/**
 * ToggleGroupItem component.
 *
 * This component renders an individual toggle button with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the toggle item.
 * @param {string} variant - Variant of the toggle item.
 * @param {string} size - Size of the toggle item.
 * @param {React.ReactNode} children - Child elements to be rendered within the toggle item.
 *
 * @example
 * <ToggleGroupItem className="custom-class" variant="default" size="default" value="1">
 *   Item 1
 * </ToggleGroupItem>
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
