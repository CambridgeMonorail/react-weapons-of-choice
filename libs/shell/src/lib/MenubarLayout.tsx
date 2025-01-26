import type { FC, ReactNode } from "react"
import { Bell, Settings, User, House } from "lucide-react"
import { Header } from "@rwoc/landing"
import { ResponsiveNavBar } from "@rwoc/shadcnui-blocks"

/**
 * MenuItem type defines the structure of each menu item.
 */
export type MenuItem = {
  label: string
  path?: string
  children?: MenuItem[]
}

/**
 * MenubarLayoutProps type defines the props for the MenubarLayout component.
 */
export type MenubarLayoutProps = {
  children: ReactNode
  menuItems: MenuItem[]
}

/**
 * MenubarLayout component renders a layout with a header and a responsive navigation bar.
 * The consuming code is expected to wrap this layout in a router (e.g., HashRouter or BrowserRouter).
 */
const MenubarLayout: FC<MenubarLayoutProps> = ({ children, menuItems }) => {
  const actionButtonsProps = [
    { icon: <Bell className="h-5 w-5" />, label: "Notifications" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
    { icon: <User className="h-5 w-5" />, label: "User profile" },
  ]

  return (
    // The consuming code is expected to wrap this layout in a router (e.g., HashRouter or BrowserRouter)
    <div className="min-h-screen flex flex-col" data-testid="menubar-layout">
      <Header
        actionButtonsProps={actionButtonsProps}
        centerContent={<div className="text-center">Center Content</div>}
        logoIcon={<House />}
        title="MY APPLICATION"
        variant="primary"
        data-testid="header"
      />
      <ResponsiveNavBar menuItems={menuItems} data-testid="responsive-nav-bar" />
      <main className="flex-grow" data-testid="main-content">{children}</main>
    </div>
  )
}

export { MenubarLayout }

