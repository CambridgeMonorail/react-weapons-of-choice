"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "../../../../lib/utils"

/**
 * Avatar component is used to display a user's profile picture or an image.
 * It supports fallback content when the image is not available.
 *
 * @param {string} className - Additional Tailwind CSS classes for the avatar.
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} props - Props for the Avatar component.
 * @returns {JSX.Element} The Avatar component.
 *
 * @example
 * <Avatar className="custom-class">
 *   <AvatarImage src="https://example.com/image.jpg" alt="User Avatar" />
 *   <AvatarFallback>AB</AvatarFallback>
 * </Avatar>
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * AvatarImage component is used to display the image inside the Avatar.
 *
 * @param {string} className - Additional Tailwind CSS classes for the avatar image.
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} props - Props for the AvatarImage component.
 * @returns {JSX.Element} The AvatarImage component.
 *
 * @example
 * <AvatarImage src="https://example.com/image.jpg" alt="User Avatar" />
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * AvatarFallback component is used to display fallback content inside the Avatar
 * when the image is not available.
 *
 * @param {string} className - Additional Tailwind CSS classes for the avatar fallback.
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} props - Props for the AvatarFallback component.
 * @returns {JSX.Element} The AvatarFallback component.
 *
 * @example
 * <AvatarFallback>AB</AvatarFallback>
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
