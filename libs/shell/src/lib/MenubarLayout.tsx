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

interface MenubarLayoutProps {
  children: ReactNode;
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
export function MenubarLayout({ children }: MenubarLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-full w-full">
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="p-2">☰</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>File</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Profiles</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <span>⌘T</span>
              </MenubarItem>
              <MenubarItem>
                New Window <span>⌘N</span>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <span>⌘P</span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <span>⌘Z</span>
              </MenubarItem>
              <MenubarItem>
                Redo <span>⇧⌘Z</span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <span>⌘R</span>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <span>⇧⌘R</span>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
      <div className="flex-1 overflow-y-auto w-full" role="main">
        {children}
      </div>
    </div>
  );
}
