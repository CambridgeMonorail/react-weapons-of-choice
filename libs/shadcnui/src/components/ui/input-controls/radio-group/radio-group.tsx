import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "../../../../lib/utils"
import { DotFilledIcon } from "@radix-ui/react-icons"

/**
 * RadioGroup component.
 *
 * This component renders a group of radio buttons with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the radio group.
 * @param {boolean} disabled - Disable the radio group.
 * @param {string} value - Value of the selected radio item.
 *
 * @example
 * <RadioGroup className="custom-class" disabled={false} value="1">
 *   <RadioGroupItem value="1" />
 *   <RadioGroupItem value="2" />
 *   <RadioGroupItem value="3" />
 * </RadioGroup>
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

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
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <DotFilledIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
