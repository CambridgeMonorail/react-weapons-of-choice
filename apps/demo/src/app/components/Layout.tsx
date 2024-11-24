import { Button, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@react-monorepo/shared';
import { FC, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { path: '/home', label: 'Home' },
  { path: '/buttons', label: 'Buttons' },
  { path: '/cards', label: 'Cards' },
  { path: '/forms', label: 'Forms' },
  { path: '/dialogs', label: 'Dialogs' },
  { path: '/dropdowns', label: 'Dropdowns' },
  { path: '/tabs', label: 'Tabs' },
  { path: '/toggles', label: 'Toggles' },
  { path: '/tooltips', label: 'Tooltips' },
  { path: '/charts', label: 'Charts' },
];

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
          <div className="flex justify-between items-center mb-4">
            <SidebarTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SidebarTrigger>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Landing
            </Button>
          </div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
