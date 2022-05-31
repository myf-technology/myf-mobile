import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Email } from '..';

describe('<Email />', () => {
  it('should render EmailPhone view correctly', () => {
    const { getAllByTestId, getByTestId } = render(<Email />);

    const inputs = getAllByTestId('inputs');
    const button = getByTestId('button');

    expect(inputs.length).toBe(3);
    expect(inputs[0].props.children[0].props.children).toBe('Email');
    expect(inputs[1].props.children[0].props.children).toBe(
      'Confimação de email'
    );
    expect(inputs[2].props.children[0].props.children).toBe(
      'Número de telefone'
    );
    expect(button).toBeTruthy();
  });
});
