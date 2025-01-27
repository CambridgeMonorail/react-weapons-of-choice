import type { FC } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button, Sheet, SheetContent, SheetTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, useMediaQuery } from "@erisfy/shadcnui";

type MenuItem = {
  label: string;
  path?: string;
  children?: MenuItem[];
};

type ResponsiveNavBarProps = {
  menuItems: MenuItem[];
};

/**
 * ResponsiveNavBar component renders a navigation bar that adapts to mobile and desktop views.
 */
const ResponsiveNavBar: FC<ResponsiveNavBarProps> = ({ menuItems }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const renderMenuItems = (items: MenuItem[], isMobileMenu = false) => {
    return items.map((item, index) => (
      <Fragment key={index}>
        {item.children ? (
          isMobileMenu ? (
            <div className="px-4 py-2">
              <h3 className="mb-2 text-lg font-semibold">{item.label}</h3>
              <ul className="pl-4">{renderMenuItems(item.children, true)}</ul>
            </div>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={child.path || "#"}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{child.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to={item.path || "#"}
                className={
                  isMobileMenu
                    ? "block px-4 py-2 text-sm"
                    : "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                }
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </Fragment>
    ));
  };

  return (
    <nav className="bg-transparent" data-testid="responsive-nav-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col">{renderMenuItems(menuItems, true)}</nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>{renderMenuItems(menuItems)}</NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </nav>
  );
};

export { ResponsiveNavBar };

