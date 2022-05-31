import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Address } from '..';

describe('<Address />', () => {
  it('should render Address view correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Address />);

    const inputs = getAllByTestId('input');
    const button = getByTestId('button');

    expect(inputs.length).toBe(6);

    expect(inputs[0].props.children[0].props.children).toBe('CEP');
    expect(inputs[1].props.children[0].props.children).toBe('Endereço');
    expect(inputs[2].props.children[0].props.children).toBe('Número');
    expect(inputs[3].props.children[0].props.children).toBe('Bairro');
    expect(inputs[4].props.children[0].props.children).toBe('Cidade');
    expect(inputs[5].props.children[0].props.children).toBe('Estado');
    expect(button).toBeTruthy();
  });
});
