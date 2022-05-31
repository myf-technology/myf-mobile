import { render } from '@testing-library/react-native';

import { IndexIndicator } from '..';
import Colors from '../../../../../../constants/Colors';

describe('<IndexIndicator />', () => {
  it('should change colors when function is called', () => {
    const { getByTestId, rerender } = render(
      <IndexIndicator colorIndex={{ value: 0 }} />
    );
    const firstCircle = getByTestId('first-circle');
    const secondCircle = getByTestId('second-circle');

    expect(firstCircle.props.style.backgroundColor).toBe(Colors.dark);
    expect(secondCircle.props.style.backgroundColor).toBe(Colors.grey3);
    rerender(<IndexIndicator colorIndex={{ value: 1 }} />);
    expect(firstCircle.props.style.backgroundColor).toBe(Colors.grey3);
    expect(secondCircle.props.style.backgroundColor).toBe(Colors.dark);
  });
});
