"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "../../../../lib/utils"

/**
 * TooltipProvider component provides a context for managing tooltip interactions.
 * 
 * @component
 */
const TooltipProvider = TooltipPrimitive.Provider

/**
 * Tooltip component provides a popover that appears when the user hovers over an element.
 * 
 * @component
 * @example
 * ```tsx
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger asChild>
 *       <Button variant="outline">Hover me</Button>
 *     </TooltipTrigger>
 *     <TooltipContent>
 *       This is a default tooltip message.
 *     </TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 * ```
 */
const Tooltip = TooltipPrimitive.Root

/**
 * TooltipTrigger component is used to open the Tooltip.
 * 
 * @component
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * TooltipContent component is used to render the content of the Tooltip.
 * 
 * @component
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
