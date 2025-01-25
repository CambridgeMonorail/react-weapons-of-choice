import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  useIsMobile,
} from '@rwoc/shadcnui';

import { ReactNode } from 'react';

interface MenuItem {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  inset?: boolean;
  type?: 'item' | 'separator' | 'sub' | 'checkbox' | 'radio';
  checked?: boolean;
  value?: string;
  items?: MenuItem[];
}

interface MenubarLayoutProps {
  children: ReactNode;
  menuData: MenuItem[];
}

/**
 * MenubarLayout component provides a responsive navigation menu that adapts
 * to both desktop and mobile views. On desktop, it displays a traditional
 * menubar, while on mobile, it uses a dropdown menu.
 *
 * ## When a Top Navigation Menu Is Better:
 * - Space Efficiency: Consumes less screen space, preserving more area for content display, which is beneficial for content-centric websites.
 * - Hover-Activated Submenus: Facilitates the use of hover-activated submenus and mega menus, which are effective for accommodating a large number of options or revealing lower-level site pages at a glance.
 * - User Familiarity: Users often expect top navigation on websites, making it a conventional choice that aligns with user expectations.
 */
export function MenubarLayout({ children, menuData }: MenubarLayoutProps) {
  const isMobile = useIsMobile();

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => {
      switch (item.type) {
        case 'separator':
          return <MenubarSeparator key={index} />;
        case 'sub':
          return (
            <MenubarSub key={index}>
              <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
              <MenubarSubContent>{renderMenuItems(item.items || [])}</MenubarSubContent>
            </MenubarSub>
          );
        case 'checkbox':
          return (
            <MenubarCheckboxItem key={index} checked={item.checked}>
              {item.label}
            </MenubarCheckboxItem>
          );
        case 'radio':
          return (
            <MenubarRadioItem key={index} value={item.value}>
              {item.label}
            </MenubarRadioItem>
          );
        default:
          return (
            <MenubarItem key={index} disabled={item.disabled} inset={item.inset}>
              {item.label} {item.shortcut && <span>{item.shortcut}</span>}
            </MenubarItem>
          );
      }
    });
  };

  return (
    <div className="flex flex-col h-full w-full">
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="p-2">☰</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuData.map((menu, index) => (
              <DropdownMenuItem key={index}>{menu.label}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Menubar>
          {menuData.map((menu, index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger>{menu.label}</MenubarTrigger>
              <MenubarContent>{renderMenuItems(menu.items || [])}</MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      )}
      <div className="flex-1 overflow-y-auto w-full" role="main">
        {children}
      </div>
    </div>
  );
}
