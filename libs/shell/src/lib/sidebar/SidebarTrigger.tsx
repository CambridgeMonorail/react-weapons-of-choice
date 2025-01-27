import { Button } from '@erisfy/shadcnui';
import { useSidebar } from './SidebarProvider';
import { Menu } from 'lucide-react';

interface SidebarTriggerProps {
  className?: string;
}

export const SidebarTrigger = ({ className }: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={className}
      title="Toggle sidebar"
    >
      <Menu className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  );
};
