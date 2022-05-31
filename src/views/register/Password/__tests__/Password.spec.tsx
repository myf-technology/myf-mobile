import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Password } from '..';

describe('<Password />', () => {
  it('Should render Password view correctly', () => {
    const { getAllByTestId } = render(<Password />);

    const inputs = getAllByTestId('input');

    expect(inputs.length).toBe(2);
    expect(inputs[0].props.children[0].props.children).toBe('Senha');
    expect(inputs[1].props.children[0].props.children).toBe(
      'Confirmação senha'
    );
  });
  it('should render base requirements correctly', () => {
    const { getAllByTestId, getByText } = render(<Password />);

    expect(getByText('Aceitar termos de condições')).toBeTruthy();
    expect(getByText('Aceitar promoções')).toBeTruthy();
    expect(getByText('Fazer o login com touch ID')).toBeTruthy();

    const toggle = getAllByTestId('toggle');
    expect(toggle.length).toBe(3);
  });
});
