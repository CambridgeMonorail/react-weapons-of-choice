import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(getByText(/The Boilerplate That Speeds Up SPA Development/gi)).toBeTruthy();
  });

  it('should render the sixth feature', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(getByText(/Built for Performance – Optimized tools for blazing-fast development/gi)).toBeTruthy();
  });

  it('should apply hover effects to feature cards', () => {
    const { container } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const featureCards = container.querySelectorAll('.hover\\:shadow-lg.hover\\:scale-105.transition-transform.duration-300');
    expect(featureCards.length).toBeGreaterThan(0);
  });

  it('should revise feature titles and descriptions to emphasize user benefits', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(getByText(/Stop Wasting Time on Setup – Start Coding Fast/gi)).toBeTruthy();
    expect(getByText(/Craft Stunning, Responsive UIs with Ease/gi)).toBeTruthy();
    expect(getByText(/Easily Scale Your Project Without Breaking a Sweat/gi)).toBeTruthy();
  });
});
