import { ReactNode } from 'react';
import { SidebarContent } from '@erisfy/shadcnui';

interface SidebarInsetProps {
  children: ReactNode;
}

export const SidebarInset = ({ children }: SidebarInsetProps) => {
  return <SidebarContent>{children}</SidebarContent>;
};
