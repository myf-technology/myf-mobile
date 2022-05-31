import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Spacer } from '..';

describe('<Spacer />', () => {
  it('should give current amount value', () => {
    const { getByTestId } = render(<Spacer amount={1} />);

    const spacer = getByTestId('spacer');

    expect(spacer.props.style.marginTop).toBe(13.34);
  });
});
