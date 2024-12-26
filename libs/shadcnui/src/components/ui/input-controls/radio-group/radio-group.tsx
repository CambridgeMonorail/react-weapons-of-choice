import * as React from "react"
import { Root as RadioGroupRoot, Item as RadioGroupItemPrimitive, Indicator } from "@radix-ui/react-radio-group"
import { cn } from "../../../../lib/utils"
import { DotFilledIcon } from "@radix-ui/react-icons"

/**
 * RadioGroup component.
 *
 * This component renders a group of radio buttons with customizable styles and states.
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupRoot>,
  React.ComponentPropsWithoutRef<typeof RadioGroupRoot>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupRoot
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupRoot.displayName

/**
 * RadioGroupItem component.
 *
 * This component renders an individual radio button with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the radio item.
 * @param {boolean} disabled - Disable the radio item.
 * @param {string} value - Value of the radio item.
 *
 * @example
 * <RadioGroupItem className="custom-class" disabled={false} value="1" />
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof RadioGroupItemPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupItemPrimitive
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <DotFilledIcon className="h-3.5 w-3.5 fill-primary" />
      </Indicator>
    </RadioGroupItemPrimitive>
  )
})
RadioGroupItem.displayName = RadioGroupItemPrimitive.displayName

export { RadioGroup, RadioGroupItem }
