import type { FC } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@erisfy/shadcnui";

type MenuItem = {
  label: string;
  path?: string;
  children?: MenuItem[];
};

type HorizontalNavBarProps = {
  menuItems: MenuItem[];
};

/**
 * HorizontalNavBar component renders a horizontal navigation bar with optional nested menu items.
 */
const HorizontalNavBar: FC<HorizontalNavBarProps> = ({ menuItems }) => {
  return (
    <nav data-testid="horizontal-nav-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} data-testid={`nav-item-${index}`}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger data-testid={`nav-trigger-${index}`}>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex} data-testid={`nav-child-${index}-${childIndex}`}>
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
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path || "#"}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      data-testid={`nav-link-${index}`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export { HorizontalNavBar };

