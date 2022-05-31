import { fireEvent, render, RenderAPI } from '@testing-library/react-native';

import { CameraButton } from '..';

describe('<CameraButton />', () => {
  const onPressMock = jest.fn();
  let wrapper: RenderAPI;

  beforeEach(() => {
    wrapper = render(<CameraButton onPress={onPressMock} />);
  });

  it('Should render component correctly', () => {
    expect(wrapper.toJSON).toBeTruthy();
  });

  it('Should run a given function when onPress prop is called', async () => {
    const cameraButtonTest = await wrapper.findByTestId(
      'camera-button-component'
    );

    fireEvent.press(cameraButtonTest);

    expect(onPressMock).toBeCalled();
  });
});
