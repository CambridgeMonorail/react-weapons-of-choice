import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@erisfy/shadcnui';
import { AppSidebar } from './AppSidebar';
import { ReactNode } from 'react';
import { Moon, Sun, Github } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SidebarProvider as SidebarDataProvider, SidebarData } from './sidebarContext';
import { Logo } from '@erisfy/shadcnui-blocks';

interface LayoutProps {
  /** The main content to be displayed within the layout */
  children: ReactNode;
  /** Data for configuring the sidebar, including user info, teams, and navigation items */
  sidebarData: SidebarData;
}

/**
 * Layout component that provides a consistent structure for the application.
 * It includes a sidebar, header with breadcrumb navigation, theme toggle, and GitHub link.
 * 
 * ## When a Sidebar Is Better
 *
 * - **Scalability**: Ideal for applications with numerous top-level items, as side navigation can accommodate more links and is easier to expand as the product grows.
 * - **Customizable Structures**: Supports user-configured navigation, making it suitable for platforms like Slack or Outlook where users manage channels or folders.
 * - **Vertical Scanning**: Aligns with natural vertical scanning patterns, allowing users to view multiple navigation links simultaneously, enhancing speed and efficiency.
 */
export function Layout({ children, sidebarData }: LayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isLargeScreen = window.innerWidth > 1024;

  useEffect(() => {
    // Placeholder for theme switching logic
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <SidebarProvider defaultOpen={isLargeScreen}>
      <SidebarDataProvider data={sidebarData}>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-full w-full">
          <header
            className="flex h-16 flex-shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full max-w-full"
            data-testid="header"
            role="banner"
          >
            <div
              className="flex items-center gap-2"
              data-testid="breadcrumb-container"
              aria-label="Breadcrumb navigation"
            >
              <SidebarTrigger className="-ml-1" data-testid="sidebar-trigger" aria-label="Toggle sidebar" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                      <BreadcrumbItem
                        key={to}
                        className={isLast ? '' : 'hidden md:block'}
                        data-testid={`breadcrumb-item-${index}`}
                      >
                        {isLast ? (
                          <BreadcrumbPage aria-current="page">{value}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink>
                            <Link to={to}>{value}</Link>
                          </BreadcrumbLink>
                        )}
                        {!isLast && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                      </BreadcrumbItem>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div
              className="flex items-center gap-2"
              data-testid="theme-toggle-container"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                data-testid="theme-toggle-button"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                title="View GitHub repository"
                data-testid="github-link"
                aria-label="View GitHub repository"
              >
                <a
                  href="https://github.com/CambridgeMonorail/react-weapons-of-choice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">GitHub repository</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                title="Open Storybook"
                aria-label="Open Storybook"
                data-testid="storybook-link"
              >
                <a
                  href="https://cambridgemonorail.github.io/react-weapons-of-choice/storybook/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Logo name="storybook" className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Storybook</span>
                </a>
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto w-full" role="main">
            {children}
          </div>
        </SidebarInset>
      </SidebarDataProvider>
    </SidebarProvider>
  );
}
