import { fireEvent, render } from '@testing-library/react-native';

import { Button } from '..';
import Colors from '../../../constants/Colors';
import { height } from '../../../constants/responsive';

describe('<Button />', () => {
  it('Should render button component correctly', () => {
    const wrapper = render(
      <Button theme="yellow" onPress={jest.fn()} title="test button text" />
    );

    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('Should run a given function when onPress prop is called', async () => {
    const onPressMock = jest.fn();

    const wrapper = render(
      <Button theme="yellow" onPress={onPressMock} title="test button text" />
    );

    const Touchable = await wrapper.findByTestId('button-component');

    fireEvent.press(Touchable);

    expect(onPressMock).toBeCalled();
  });

  it('Should change style correctly on theme change', () => {
    const wrapper = render(
      <Button theme="dark" onPress={jest.fn()} title="test button text" />
    );

    const colorBaseButton = wrapper.toJSON().props.style.backgroundColor;

    expect(colorBaseButton).toBe(Colors.dark);
  });

  it('Should render text correctly when passed prop text', async () => {
    const wrapper = render(
      <Button theme="dark" onPress={jest.fn()} title="test button text" />
    );

    const textTest = await wrapper.findByText('test button text');
    expect(textTest).toBeTruthy();
  });
  it('should render correctly the small property if true', () => {
    const wrapper = render(
      <Button title="test title" onPress={() => ''} small={true}></Button>
    );
    const smallSizeTest = wrapper.toJSON().props.style.width;
    expect(smallSizeTest).toBe(height(18));
  });
});
