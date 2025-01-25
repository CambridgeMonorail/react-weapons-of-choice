import { createContext, useContext, ReactNode, ElementType } from 'react';
import { LucideIcon } from 'lucide-react';

export interface SidebarData {
  user: { name: string; email: string; avatar: string };
  teams: { name: string; logo: ElementType; plan: string }[];
  navMain: { title: string; url: string; icon?: LucideIcon; isActive?: boolean; items?: { title: string; url: string }[] }[];
}

const SidebarContext = createContext<SidebarData | undefined>(undefined);

export const SidebarProvider = ({ children, data }: { children: ReactNode; data: SidebarData }) => {
  return <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>;
};

export const useSidebarData = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarData must be used within a SidebarProvider');
  }
  return context;
};