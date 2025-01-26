import { FC, ReactNode } from 'react';
import {
  Logo,
  LogoProps,
  ActionButtons,
  ActionButtonProps,
} from '@rwoc/shadcnui-blocks';
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
  logoProps: LogoProps;
  actionButtonsProps: ActionButtonProps[];
  className?: string;
  title?: string;
  centerContent?: ReactNode;
  variant?: VariantProps<typeof headerVariants>['variant'];
};

export const Header: FC<HeaderProps> = ({
  logoProps,
  actionButtonsProps,
  className,
  title,
  centerContent,
  variant,
}) => {
  return (
    <>
      <header className={cn(headerVariants({ variant }), className)}>
        <div className="flex-none">
          {' '}
          <Logo {...logoProps} logoClassName="h-4" displayName={title} />
        </div>
        <div className="grow flex justify-center"> {centerContent}</div>
        <div className="flex-none">
          <ActionButtons buttons={actionButtonsProps} />
        </div>
      </header>
    </>
  );
};
