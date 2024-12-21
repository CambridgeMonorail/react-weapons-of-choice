"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../../../lib/utils"

/**
 * Progress component is used to display a progress bar with customizable value.
 *
 * @param {string} className - Additional Tailwind CSS classes for the progress bar.
 * @param {number} value - The progress value.
 * @param {React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>} props - Props for the Progress component.
 * @returns {JSX.Element} The Progress component.
 *
 * @example
 * <Progress value={50} className="custom-class" />
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
