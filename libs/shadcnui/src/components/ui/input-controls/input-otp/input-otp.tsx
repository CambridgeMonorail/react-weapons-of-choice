import { forwardRef, useContext, ElementRef, ComponentPropsWithoutRef } from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { cn } from "../../../../lib/utils"
import { MinusIcon } from "@radix-ui/react-icons"

/**
 * InputOTP component.
 *
 * This component renders an OTP (One-Time Password) input with customizable styles and states.
 */
const InputOTP = forwardRef<
  ElementRef<typeof OTPInput>,
  ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

/**
 * InputOTPGroup component.
 *
 * This component renders a group of InputOTP slots.
 *
 * @param {string} className - Additional Tailwind CSS classes for the group.
 *
 * @example
 * <InputOTPGroup className="custom-class">
 *   <InputOTPSlot index={0} />
 *   <InputOTPSlot index={1} />
 *   <InputOTPSlot index={2} />
 *   <InputOTPSlot index={3} />
 * </InputOTPGroup>
 */
const InputOTPGroup = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

/**
 * InputOTPSlot component.
 *
 * This component renders an individual slot for the OTP input.
 *
 * @param {number} index - The index of the slot.
 * @param {string} className - Additional Tailwind CSS classes for the slot.
 *
 * @example
 * <InputOTPSlot index={0} className="custom-class" />
 */
const InputOTPSlot = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext)
  const slot = inputOTPContext.slots[index]

  if (!slot) {
    return null
  }

  const { char, hasFakeCaret, isActive } = slot

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

/**
 * InputOTPSeparator component.
 *
 * This component renders a separator between OTP slots.
 *
 * @example
 * <InputOTPSeparator />
 */
const InputOTPSeparator = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <MinusIcon />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
