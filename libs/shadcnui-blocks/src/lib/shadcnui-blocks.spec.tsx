import { render } from '@testing-library/react';

import ShadcnuiBlocks from './shadcnui-blocks';

describe('ShadcnuiBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShadcnuiBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
