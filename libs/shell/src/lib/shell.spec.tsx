import { render } from '@testing-library/react';

import Shell from './shell';

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shell />);
    expect(baseElement).toBeTruthy();
  });
});
