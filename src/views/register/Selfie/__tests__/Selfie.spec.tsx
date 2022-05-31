import {
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';

import { Selfie } from '..';

describe('<Selfie />', () => {
  let wrapper: RenderAPI;
  beforeEach(async () => {
    wrapper = await waitFor(() => render(<Selfie />));
  });

  it('should render Selfie view correctly', async () => {
    expect(wrapper.toJSON().children[0].type).toBe(
      'ViewManagerAdapter_ExponentCamera'
    );

    [
      wrapper.getByTestId('camera-overlay'),
      wrapper.getByTestId('selfie-view-heading'),
      wrapper.getByTestId('camera-controls'),
    ].forEach((test) => {
      expect(test).toBeTruthy();
    });
  });

  it('should open modal when CameraButton is pressed', async () => {
    const CameraButton = wrapper.getByTestId('camera-button');
    let confirmationModal = wrapper.queryByTestId('confirmation-modal');

    expect(confirmationModal).toBe(null);

    await waitFor(() => fireEvent.press(CameraButton));

    confirmationModal = wrapper.getByTestId('confirmation-modal');

    expect(confirmationModal).toBeTruthy();
  });
});
