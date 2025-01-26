import { FC, ReactNode } from 'react';
import { ActionButtons, ActionButtonProps } from '@rwoc/shadcnui-blocks';
import { cn } from '@rwoc/shadcnui';
import { cva, type VariantProps } from 'class-variance-authority';

// Define header variants using cva
const headerVariants = cva('flex justify-between p-4 items-center', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground',
      card: 'bg-card text-card-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      muted: 'bg-muted text-muted-foreground',
      accent: 'bg-accent text-accent-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      sidebar: 'bg-sidebar text-sidebar-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type HeaderProps = {
  actionButtonsProps: ActionButtonProps[];
  className?: string;
  title?: string;
  logoIcon?: ReactNode;
  centerContent?: ReactNode;
  variant?: VariantProps<typeof headerVariants>['variant'];
  onButtonClick?: (index: number) => void;
};

/**
 * Header component for displaying a header section with a logo, title, center content, and action buttons.
 */
export const Header: FC<HeaderProps> = ({
  actionButtonsProps,
  className,
  title,
  logoIcon,
  centerContent,
  variant,
  onButtonClick,
}) => {
  return (
    <header className={cn(headerVariants({ variant }), className)} data-testid="header">
      <div className="flex items-center space-x-2 flex-none" data-testid="logo">
        {logoIcon}
        {title && <div>{title}</div>}
      </div>
      <div className="grow flex justify-center" data-testid="center-content">
        {centerContent}
      </div>
      <div className="flex-none" data-testid="action-buttons">
        <ActionButtons buttons={actionButtonsProps} onButtonClick={onButtonClick} />
      </div>
    </header>
  );
};
