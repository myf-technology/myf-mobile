import { fireEvent, render } from '@testing-library/react-native';

import { ConfirmationModal } from '..';

describe('<ConfirmationModal />', () => {
  it('should render correctly when showModal is true', () => {
    const { toJSON, rerender } = render(
      <ConfirmationModal
        showModal={false}
        onConfirm={() => ''}
        onCancel={() => ''}
      />
    );

    expect(toJSON()).toBeFalsy();

    rerender(<ConfirmationModal showModal={true} onConfirm="" onCancel="" />);

    expect(toJSON()).toBeTruthy();
  });

  it('should run onCancel function when cancel button is clicked', async () => {
    const mockCancelFunc = jest.fn();

    const { getByTestId } = render(
      <ConfirmationModal
        showModal={true}
        onConfirm={() => ''}
        onCancel={mockCancelFunc}
      />
    );

    const CancelButton = getByTestId('cancel-button');

    fireEvent.press(CancelButton);

    expect(mockCancelFunc).toBeCalled();
  });

  it('should run onConfirm function when confirm button is clicked', async () => {
    const mockConfirmFunc = jest.fn();

    const { getByTestId } = render(
      <ConfirmationModal
        showModal={true}
        onConfirm={mockConfirmFunc}
        onCancel={() => ''}
      />
    );

    const ConfirmButton = getByTestId('confirm-button');

    fireEvent.press(ConfirmButton);

    expect(mockConfirmFunc).toBeCalled();
  });
});
