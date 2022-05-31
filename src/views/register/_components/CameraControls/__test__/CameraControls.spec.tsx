import { fireEvent, render } from '@testing-library/react-native';

import { CameraControls } from '..';

describe('<CameraControls />', () => {
  const switchCameraMock = jest.fn();
  const cameraButtonMock = jest.fn();
  const wrapper = render(
    <CameraControls
      switchCamera={switchCameraMock}
      takePicture={cameraButtonMock}
    />
  );

  it('should render CameraControls component correctly', () => {
    wrapper.rerender(
      <CameraControls
        switchCamera={switchCameraMock}
        takePicture={cameraButtonMock}
      />
    );
  });

  it('should run a given funciton passed to CameraControls props', () => {
    const switchCameraTest = wrapper.getByTestId('switch-camera');

    fireEvent.press(switchCameraTest);

    expect(switchCameraMock).toBeCalled();

    const cameraButtonTest = wrapper.getByTestId('camera-button');

    fireEvent.press(cameraButtonTest);

    expect(cameraButtonMock).toBeCalled();
  });
});
