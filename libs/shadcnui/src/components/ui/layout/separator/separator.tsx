import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "../../../../lib/utils"

/**
 * Separator component.
 *
 * This component provides a visual separator between elements, either horizontally or vertically.
 *
 * @param {string} orientation - The orientation of the separator (horizontal or vertical).
 * @param {boolean} decorative - Whether the separator is purely decorative.
 * @param {string} className - Additional Tailwind CSS classes for the separator.
 *
 * @example
 * <Separator orientation="horizontal" className="my-4" />
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
