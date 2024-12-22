import { FC, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * BadgeProps interface extends HTML attributes and VariantProps for the Badge component.
 * It includes properties for className and variant.
 */
export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component is used to display a small badge with different variants.
 * @param {BadgeProps} props - Props for the Badge component.
 * @returns {JSX.Element} The Badge component.
 */
export const Badge: FC<BadgeProps> = ({ className, variant, ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
