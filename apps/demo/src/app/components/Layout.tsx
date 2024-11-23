import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@react-monorepo/shared';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const navItems = [
  { path: '/toggles', label: 'Toggles' },
  { path: '/tooltips', label: 'Tooltips' },
  { path: '/charts', label: 'Charts' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader>
            <h1 className="text-xl font-bold p-4">shadcn Demo</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;