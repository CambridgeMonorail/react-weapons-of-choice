import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { cn } from "../../../../lib/utils"
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons"

/**
 * ContextMenu component that provides a context menu interface.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <button>Right click here</button>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Item 1</ContextMenuItem>
 *     <ContextMenuItem>Item 2</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */
const ContextMenu = ContextMenuPrimitive.Root

/**
 * ContextMenuTrigger component that triggers the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuTrigger>
 *   <button>Right click here</button>
 * </ContextMenuTrigger>
 * ```
 */
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

/**
 * ContextMenuGroup component that groups context menu items.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuGroup>
 *   <ContextMenuItem>Item 1</ContextMenuItem>
 *   <ContextMenuItem>Item 2</ContextMenuItem>
 * </ContextMenuGroup>
 * ```
 */
const ContextMenuGroup = ContextMenuPrimitive.Group

/**
 * ContextMenuPortal component that provides a portal for the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuPortal>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Item 1</ContextMenuItem>
 *     <ContextMenuItem>Item 2</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenuPortal>
 * ```
 */
const ContextMenuPortal = ContextMenuPrimitive.Portal

/**
 * ContextMenuSub component that provides a sub menu within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuSub>
 *   <ContextMenuSubTrigger>Sub Menu</ContextMenuSubTrigger>
 *   <ContextMenuSubContent>
 *     <ContextMenuItem>Sub Item 1</ContextMenuItem>
 *     <ContextMenuItem>Sub Item 2</ContextMenuItem>
 *   </ContextMenuSubContent>
 * </ContextMenuSub>
 * ```
 */
const ContextMenuSub = ContextMenuPrimitive.Sub

/**
 * ContextMenuRadioGroup component that provides a radio group within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuRadioGroup value="item-1">
 *   <ContextMenuRadioItem value="item-1">Radio Item 1</ContextMenuRadioItem>
 *   <ContextMenuRadioItem value="item-2">Radio Item 2</ContextMenuRadioItem>
 * </ContextMenuRadioGroup>
 * ```
 */
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

/**
 * ContextMenuSubTrigger component that triggers the sub menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuSubTrigger>Sub Menu</ContextMenuSubTrigger>
 * ```
 */
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
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
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

/**
 * ContextMenuSubContent component that provides the content for the sub menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuSubContent>
 *   <ContextMenuItem>Sub Item 1</ContextMenuItem>
 *   <ContextMenuItem>Sub Item 2</ContextMenuItem>
 * </ContextMenuSubContent>
 * ```
 */
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

/**
 * ContextMenuContent component that provides the content for the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuContent>
 *   <ContextMenuItem>Item 1</ContextMenuItem>
 *   <ContextMenuItem>Item 2</ContextMenuItem>
 * </ContextMenuContent>
 * ```
 */
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

/**
 * ContextMenuItem component that represents a single item within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuItem>Item 1</ContextMenuItem>
 * ```
 */
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

/**
 * ContextMenuCheckboxItem component that provides a checkbox item within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuCheckboxItem checked>Checkbox Item 1</ContextMenuCheckboxItem>
 * <ContextMenuCheckboxItem>Checkbox Item 2</ContextMenuCheckboxItem>
 * ```
 */
const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

/**
 * ContextMenuRadioItem component that provides a radio item within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuRadioGroup value="item-1">
 *   <ContextMenuRadioItem value="item-1">Radio Item 1</ContextMenuRadioItem>
 *   <ContextMenuRadioItem value="item-2">Radio Item 2</ContextMenuRadioItem>
 * </ContextMenuRadioGroup>
 * ```
 */
const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

/**
 * ContextMenuLabel component that provides a label within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuLabel>Label 1</ContextMenuLabel>
 * ```
 */
const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

/**
 * ContextMenuSeparator component that provides a separator within the context menu.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuSeparator />
 * ```
 */
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

/**
 * ContextMenuShortcut component that provides a shortcut key for a context menu item.
 * 
 * @component
 * @example
 * ```tsx
 * <ContextMenuItem>
 *   Item 1
 *   <ContextMenuShortcut>⌘1</ContextMenuShortcut>
 * </ContextMenuItem>
 * ```
 */
const ContextMenuShortcut = ({
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
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
