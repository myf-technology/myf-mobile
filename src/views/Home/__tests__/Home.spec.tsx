import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Home } from '..';

describe('<Home />', () => {
  it('Should render Home Page', () => {
    const { getAllByTestId, getByTestId } = render(<Home />);

    const image = getByTestId('logo');
    const button = getAllByTestId('button');
    const backgroundImage = getByTestId('background');

    expect(image).toBeTruthy();
    expect(backgroundImage).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
