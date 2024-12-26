import * as React from "react"

import { cn } from "../../../../lib/utils"

/**
 * Textarea component.
 *
 * This component renders a textarea with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the textarea.
 * @param {boolean} disabled - Disable the textarea.
 * @param {string} placeholder - Placeholder text for the textarea.
 *
 * @example
 * <Textarea className="custom-class" disabled={false} placeholder="Enter text" />
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
