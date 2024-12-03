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
} from '@rwoc/shared';
import { AppSidebar } from './AppSidebar';
import { ReactNode } from 'react';
import { Moon, Sun, Github } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  useEffect(() => {
    // Placeholder for theme switching logic
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className="flex h-16 flex-shrink items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full max-w-full"
          data-testid="header"
        >
          <div
            className="flex items-center gap-2"
            data-testid="breadcrumb-container"
          >
            <SidebarTrigger className="-ml-1" data-testid="sidebar-trigger" />
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
                        <BreadcrumbPage>{value}</BreadcrumbPage>
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
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
