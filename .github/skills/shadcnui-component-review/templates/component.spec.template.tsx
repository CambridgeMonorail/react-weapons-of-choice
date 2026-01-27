import { render, screen } from '@testing-library/react';

import { ComponentUnderTest } from './index';

describe('ComponentUnderTest', () => {
  it('renders', () => {
    render(<ComponentUnderTest />);
    // Replace with an assertion that matches your component semantics.
    expect(screen.getByTestId('component-under-test')).toBeInTheDocument();
  });

  it('is discoverable by role and name where applicable', () => {
    render(<ComponentUnderTest />);
    // Replace with role and accessible name once known.
    // Example:
    // expect(screen.getByRole("button", { name: /save/i })).toBeEnabled();
  });
});
