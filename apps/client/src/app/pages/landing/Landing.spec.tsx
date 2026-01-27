import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Landing';
describe('LandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    expect(baseElement).toBeTruthy();
  });
  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    expect(
      getByText(/The Boilerplate That Speeds Up SPA Development/gi),
    ).toBeTruthy();
  });
  it('should render the sixth feature', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    expect(getByText(/Optimized Tools for Rapid Development/gi)).toBeTruthy();
  });
  it('should revise feature titles and descriptions to emphasize user benefits', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    expect(getByText(/Instant Setup – Code Without Delay/gi)).toBeTruthy();
    expect(getByText(/Effortless Responsive UI Design/gi)).toBeTruthy();
    expect(getByText(/Seamless Project Scalability/gi)).toBeTruthy();
  });
});
