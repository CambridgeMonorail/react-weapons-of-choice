import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

/**
 * AspectRatio component.
 *
 * This component is a wrapper that maintains a consistent aspect ratio for its children.
 *
 * @param {number} ratio - The aspect ratio of the container.
 * @param {string} className - Additional Tailwind CSS classes for the container.
 *
 * @example
 * <AspectRatio ratio={16 / 9} className="bg-gray-200">
 *   <div>16:9 Aspect Ratio</div>
 * </AspectRatio>
 */
const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
