import { cn } from "../../../../lib/utils"

/**
 * Skeleton component is used to display a loading placeholder with a pulsing animation.
 *
 * @param {string} className - Additional Tailwind CSS classes for the skeleton.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Props for the Skeleton component.
 * @returns {JSX.Element} The Skeleton component.
 *
 * @example
 * <Skeleton className="custom-class" />
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
