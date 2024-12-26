import * as React from "react"

import { cn } from "../../../../lib/utils"

/**
 * Input component.
 *
 * This component renders an input field with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the input.
 * @param {string} type - Type of the input.
 * @param {boolean} disabled - Disable the input.
 * @param {string} placeholder - Placeholder text for the input.
 *
 * @example
 * <Input className="custom-class" type="text" disabled={false} placeholder="Enter text" />
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
