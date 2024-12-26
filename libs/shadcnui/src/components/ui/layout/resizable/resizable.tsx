"use client"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../../../../lib/utils"
import { DragHandleDots2Icon } from "@radix-ui/react-icons"

/**
 * ResizablePanelGroup component.
 *
 * This component provides a group of resizable panels.
 */
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

/**
 * ResizablePanel component.
 *
 * This component provides a resizable panel.
 *
 * @param {React.ComponentProps<typeof ResizablePrimitive.Panel>} props - Props for the ResizablePanel component.
 *
 * @example
 * <ResizablePanel>
 *   <div>Panel Content</div>
 * </ResizablePanel>
 */
const ResizablePanel = ResizablePrimitive.Panel

/**
 * ResizableHandle component.
 *
 * This component provides a handle for resizing panels.
 *
 * @param {boolean} withHandle - Whether to include a visual handle.
 * @param {string} className - Additional Tailwind CSS classes for the handle.
 * @param {React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>} props - Props for the ResizableHandle component.
 *
 * @example
 * <ResizableHandle withHandle />
 */
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <DragHandleDots2Icon className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }