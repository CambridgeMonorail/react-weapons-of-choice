import { render } from '@testing-library/react';

// Update the import path to match the correct file structure
import Shell from './shell';

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shell />);
    expect(baseElement).toBeTruthy();
  });
});
