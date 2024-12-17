import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { describe, it, expect } from 'vitest';
import { Tagline } from './index';

describe('Tagline', () => {
  it('renders with the correct text', () => {
    render(<Tagline text="Test Tagline" />);
    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    render(<Tagline text="Test Tagline" className="extra-class" />);
    const taglineElement = screen.getByText('Test Tagline');
    expect(taglineElement).toHaveClass('extra-class');
  });

  it('applies inline styles', () => {
    render(<Tagline text="Test Tagline" style={{ color: 'red' }} />);
    const taglineElement = screen.getByText('Test Tagline');
    expect(taglineElement).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('sets the id attribute', () => {
    render(<Tagline text="Test Tagline" id="tagline-id" />);
    const taglineElement = screen.getByText('Test Tagline');
    expect(taglineElement).toHaveAttribute('id', 'tagline-id');
  });

  it('sets the data-testid attribute', () => {
    render(<Tagline text="Test Tagline" dataTestId="tagline-testid" />);
    const taglineElement = screen.getByTestId('tagline-testid');
    expect(taglineElement).toBeInTheDocument();
  });
});