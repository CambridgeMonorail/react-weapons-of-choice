"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * Collapsible component.
 *
 * This component provides a collapsible container that can be toggled open or closed.
 *
 * @param {boolean} open - Whether the collapsible is open by default.
 * @param {Function} onOpenChange - Callback function when the open state changes.
 * @param {React.ReactNode} children - The content to be rendered inside the collapsible.
 *
 * @example
 * <Collapsible open={true} onOpenChange={(open) => console.log(open)}>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 */
const Collapsible = CollapsiblePrimitive.Root

/**
 * CollapsibleTrigger component.
 *
 * This component is used to trigger the opening and closing of the collapsible.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the trigger.
 * @param {string} className - Additional Tailwind CSS classes for the trigger.
 *
 * @example
 * <CollapsibleTrigger className="bg-gray-200 p-2">Toggle</CollapsibleTrigger>
 */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

/**
 * CollapsibleContent component.
 *
 * This component is used to render the content inside the collapsible.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the collapsible.
 * @param {string} className - Additional Tailwind CSS classes for the content.
 *
 * @example
 * <CollapsibleContent className="p-2">Content</CollapsibleContent>
 */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
