import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import { Header } from './index';
import { Home, User, Settings } from 'lucide-react';

describe('Header', () => {
  const actionButtonsProps = [
    { icon: <Home />, label: 'Home' },
    { icon: <User />, label: 'User' },
    { icon: <Settings />, label: 'Settings' },
  ];

  it('renders the logo and action buttons', () => {
    render(<Header logoIcon={<Home />} actionButtonsProps={actionButtonsProps} />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('applies additional class names', () => {
    render(<Header logoIcon={<Home />} actionButtonsProps={actionButtonsProps} className="custom-class" />);
    expect(screen.getByTestId('header')).toHaveClass('custom-class');
  });

  it('is responsive', () => {
    render(<Header logoIcon={<Home />} actionButtonsProps={actionButtonsProps} />);
    const header = screen.getByTestId('header');
    expect(header).toHaveClass('bg-primary', 'text-primary-foreground');
    expect(header).toHaveClass('flex', 'justify-between', 'p-4', 'items-center');
  });
});
