"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "../../../../lib/utils"

/**
 * HoverCard component provides a popover that appears when the user hovers over an element.
 * 
 * @component
 * @example
 * ```tsx
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <Button variant="outline">Hover over me</Button>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <div className="text-sm">
 *       <strong>HoverCard Title</strong>
 *       <p>This is a simple hover card description.</p>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 * ```
 */
const HoverCard = HoverCardPrimitive.Root

/**
 * HoverCardTrigger component is used to open the HoverCard.
 * 
 * @component
 */
const HoverCardTrigger = HoverCardPrimitive.Trigger

/**
 * HoverCardContent component is used to render the content of the HoverCard.
 * 
 * @component
 */
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
