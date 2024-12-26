"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cn } from "../../../../lib/utils"
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons"

/**
 * Menubar component that provides a menubar interface.
 */
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

/**
 * MenubarMenu component that provides a menu within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarMenu>
 *   <MenubarTrigger>File</MenubarTrigger>
 *   <MenubarContent>
 *     <MenubarItem>New File</MenubarItem>
 *     <MenubarItem>Open File</MenubarItem>
 *   </MenubarContent>
 * </MenubarMenu>
 * ```
 */
const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu

/**
 * MenubarGroup component that groups menubar items.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarGroup>
 *   <MenubarItem>Item 1</MenubarItem>
 *   <MenubarItem>Item 2</MenubarItem>
 * </MenubarGroup>
 * ```
 */
const MenubarGroup: typeof MenubarPrimitive.Group = MenubarPrimitive.Group

/**
 * MenubarPortal component that provides a portal for the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarPortal>
 *   <MenubarContent>
 *     <MenubarItem>Item 1</MenubarItem>
 *     <MenubarItem>Item 2</MenubarItem>
 *   </MenubarContent>
 * </MenubarPortal>
 * ```
 */
const MenubarPortal: typeof MenubarPrimitive.Portal = MenubarPrimitive.Portal

/**
 * MenubarSub component that provides a sub menu within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarSub>
 *   <MenubarSubTrigger>Sub Menu</MenubarSubTrigger>
 *   <MenubarSubContent>
 *     <MenubarItem>Sub Item 1</MenubarItem>
 *     <MenubarItem>Sub Item 2</MenubarItem>
 *   </MenubarSubContent>
 * </MenubarSub>
 * ```
 */
const MenubarSub: typeof MenubarPrimitive.Sub = MenubarPrimitive.Sub

/**
 * MenubarRadioGroup component that provides a radio group within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarRadioGroup value="item-1">
 *   <MenubarRadioItem value="item-1">Radio Item 1</MenubarRadioItem>
 *   <MenubarRadioItem value="item-2">Radio Item 2</MenubarRadioItem>
 * </MenubarRadioGroup>
 * ```
 */
const MenubarRadioGroup: typeof MenubarPrimitive.RadioGroup = MenubarPrimitive.RadioGroup

/**
 * MenubarTrigger component that triggers the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarTrigger>File</MenubarTrigger>
 * ```
 */
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

/**
 * MenubarSubTrigger component that triggers the sub menu.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarSubTrigger>Sub Menu</MenubarSubTrigger>
 * ```
 */
const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

/**
 * MenubarSubContent component that provides the content for the sub menu.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarSubContent>
 *   <MenubarItem>Sub Item 1</MenubarItem>
 *   <MenubarItem>Sub Item 2</MenubarItem>
 * </MenubarSubContent>
 * ```
 */
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

/**
 * MenubarContent component that provides the content for the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarContent>
 *   <MenubarItem>Item 1</MenubarItem>
 *   <MenubarItem>Item 2</MenubarItem>
 * </MenubarContent>
 * ```
 */
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

/**
 * MenubarItem component that represents a single item within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarItem>Item 1</MenubarItem>
 * ```
 */
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

/**
 * MenubarCheckboxItem component that provides a checkbox item within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarCheckboxItem checked>Checkbox Item 1</MenubarCheckboxItem>
 * <MenubarCheckboxItem>Checkbox Item 2</MenubarCheckboxItem>
 * ```
 */
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

/**
 * MenubarRadioItem component that provides a radio item within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarRadioGroup value="item-1">
 *   <MenubarRadioItem value="item-1">Radio Item 1</MenubarRadioItem>
 *   <MenubarRadioItem value="item-2">Radio Item 2</MenubarRadioItem>
 * </MenubarRadioGroup>
 * ```
 */
const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

/**
 * MenubarLabel component that provides a label within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarLabel>Label 1</MenubarLabel>
 * ```
 */
const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

/**
 * MenubarSeparator component that provides a separator within the menubar.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarSeparator />
 * ```
 */
const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

/**
 * MenubarShortcut component that provides a shortcut key for a menubar item.
 * 
 * @component
 * @example
 * ```tsx
 * <MenubarItem>
 *   Item 1
 *   <MenubarShortcut>⌘1</MenubarShortcut>
 * </MenubarItem>
 * ```
 */
const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
