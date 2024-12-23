import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../../../../lib/utils"

/**
 * Popover component provides a popover that appears when the user clicks on a trigger element.
 * 
 * @component
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button variant="outline">Open Popover</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>This is a simple popover content.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const Popover = PopoverPrimitive.Root

/**
 * PopoverTrigger component is used to open the Popover.
 * 
 * @component
 */
const PopoverTrigger = PopoverPrimitive.Trigger

/**
 * PopoverAnchor component is used to render an anchor element for the Popover.
 * 
 * @component
 */
const PopoverAnchor = PopoverPrimitive.Anchor

/**
 * PopoverContent component is used to render the content of the Popover.
 * 
 * @component
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
