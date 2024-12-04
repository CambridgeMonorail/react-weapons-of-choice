import { render } from '@testing-library/react';

import Shadcnui from './shadcnui';

describe('Shadcnui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shadcnui />);
    expect(baseElement).toBeTruthy();
  });
});
