import { render } from '@testing-library/react-native';

import { Heading } from '..';

describe('<Heading />', () => {
  it('should render Heading component correctly', () => {
    const { getByTestId } = render(<Heading />);

    const titleText =
      'Centralize sua face ao circulo, precione o botão ao centro';
    const title = getByTestId('heading-title');
    const arrowBack = getByTestId('heading-arrow-back');

    expect(title.props.children).toBe(titleText);
    expect(arrowBack).toBeTruthy();
  });
});
