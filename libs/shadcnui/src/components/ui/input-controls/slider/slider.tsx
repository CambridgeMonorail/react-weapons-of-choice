import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../../../lib/utils"

/**
 * Slider component.
 *
 * This component renders a slider with customizable styles and states.
 *
 * @param {string} className - Additional Tailwind CSS classes for the slider.
 * @param {boolean} disabled - Disable the slider.
 * @param {number[]} value - Value of the slider.
 * @param {number} min - Minimum value of the slider.
 * @param {number} max - Maximum value of the slider.
 * @param {number} step - Step value of the slider.
 *
 * @example
 * <Slider className="custom-class" disabled={false} value={[50]} min={0} max={100} step={1} />
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
