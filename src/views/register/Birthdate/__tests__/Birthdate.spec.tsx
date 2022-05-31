import { render } from '@testing-library/react-native';

import { Birthdate } from '..';

describe('<Birthdate/>', () => {
  it('should render Birthdate view correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Birthdate />);

    const inputs = getAllByTestId('input');
    const button = getByTestId('button');
    const datePicker = getByTestId('datePicker');

    expect(inputs[0].props.children[0].props.children).toBe('Nome completo');
    expect(datePicker).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
