"use client";

import * as React from "react";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import { cn } from "../../../../lib/utils";

/**
 * Avatar component is used to display a user's profile picture or an image.
 * It supports fallback content when the image is not available.
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = Root.displayName;

/**
 * AvatarImage component is used to display the image inside the Avatar.
 *
 * @param {string} className - Additional Tailwind CSS classes for the avatar image.
 * @param {React.ComponentPropsWithoutRef<typeof Image>} props - Props for the AvatarImage component.
 * @returns {JSX.Element} The AvatarImage component.
 *
 * @example
 * <AvatarImage src="https://example.com/image.jpg" alt="User Avatar" />
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = Image.displayName;

/**
 * AvatarFallback component is used to display fallback content inside the Avatar
 * when the image is not available.
 *
 * @param {string} className - Additional Tailwind CSS classes for the avatar fallback.
 * @param {React.ComponentPropsWithoutRef<typeof Fallback>} props - Props for the AvatarFallback component.
 * @returns {JSX.Element} The AvatarFallback component.
 *
 * @example
 * <AvatarFallback>AB</AvatarFallback>
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
