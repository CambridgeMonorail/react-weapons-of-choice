import { ReactNode } from 'react';
import { SidebarContent } from '@rwoc/shadcnui';

interface SidebarInsetProps {
  children: ReactNode;
}

export const SidebarInset = ({ children }: SidebarInsetProps) => {
  return <SidebarContent>{children}</SidebarContent>;
};
