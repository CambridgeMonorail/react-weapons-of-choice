import React, { FC } from 'react';
import { Container } from '@rwoc/shadcnui';
import { LucideIcon } from 'lucide-react';

interface LayoutComponentProps {
  title: string;
  children: React.ReactNode;
}

const LayoutComponent: FC<LayoutComponentProps> = ({ title, children }) => {
  return (
    <Container className="bg-background text-foreground">
      <header className="p-4 border-b border-muted">
        <h1 className="text-primary">{title}</h1>
      </header>
      <main className="p-4">{children}</main>
    </Container>
  );
};

export { LayoutComponent };
