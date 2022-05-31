import { fireEvent, render, RenderAPI } from '@testing-library/react-native';

import { Toggle } from '..';
import Colors from '../../../constants/Colors';
import { width } from '../../../constants/responsive';

describe('<Toggle />', () => {
  const onPressMock = jest.fn();
  const textPropMock = 'prop has changed';
  const switchMock = width(1);
  let wrapper: RenderAPI;

  beforeEach(() => {
    wrapper = render(
      <Toggle onPress={onPressMock} text={textPropMock} on={false} />
    );
  });

  it('Should render Toggle component correctly', () => {
    wrapper = render(<Toggle onPress={onPressMock} text="text" on={false} />);

    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('Should run a function when onPress param is called', async () => {
    const touchable = await wrapper.findByTestId('touchable-button');

    fireEvent.press(touchable);

    expect(onPressMock).toBeCalled();
  });

  it('Should render a given text to text prop', async () => {
    const Text = await wrapper.findByTestId('text-button');

    const renderizedText = Text.props.children;

    expect(renderizedText).toBe(textPropMock);
  });

  it('Should change margin-left and backgound-color', () => {
    const getStyleByTestId = () => [
      wrapper.getByTestId('toggle-view').props.style[1].backgroundColor,
      wrapper.getByTestId('switch-view').props.style[1].marginLeft,
    ];

    const falsyStyles = getStyleByTestId();

    expect(falsyStyles[0]).toBe(Colors.white2);
    expect(falsyStyles[1]).toBe(switchMock);

    wrapper.rerender(<Toggle onPress={jest.fn()} text="text" on={true} />);

    const truthyStyles = getStyleByTestId();

    expect(truthyStyles[0]).toBe(Colors.yellow);
    expect(truthyStyles[1]).toBe(width(5));
  });
});
