import { render, screen } from '@testing-library/react';
import { Header } from './index';
import { Logo } from '@rwoc/shadcnui-blocks';
import { Button } from '@rwoc/shadcnui';
import { Home, User, Settings } from 'lucide-react';

describe('Header', () => {
  const logo = <Logo name="react" />;
  const actionButtons = [
    <Button variant="ghost" size="icon"><Home /></Button>,
    <Button variant="ghost" size="icon"><User /></Button>,
    <Button variant="ghost" size="icon"><Settings /></Button>,
  ];

  it('renders the logo and action buttons', () => {
    render(<Header logo={logo} actionButtons={actionButtons} />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('applies additional class names', () => {
    render(<Header logo={logo} actionButtons={actionButtons} className="custom-class" />);
    expect(screen.getByRole('banner')).toHaveClass('custom-class');
  });

  it('is responsive', () => {
    render(<Header logo={logo} actionButtons={actionButtons} />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-white', 'shadow-sm');
    expect(header).toHaveClass('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'h-16', 'flex', 'items-center', 'justify-between');
  });
});
