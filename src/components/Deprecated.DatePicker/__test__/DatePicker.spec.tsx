import { render } from '@testing-library/react-native';
import { Platform } from 'react-native';

import { DatePicker } from '..';

describe('<DatePicker / >', () => {
  let wrapper = render(<DatePicker label="" inputs={[]} />);
  beforeEach(() => {
    wrapper = render(<DatePicker label="" inputs={[]} />);
  });

  it('Should render DatePicker Component Correctly', () => {
    expect(wrapper.toJSON).toBeTruthy();
  });

  it('should render correctly DatePicker for given OS', () => {
    Platform.OS = 'android';
    wrapper.rerender(<DatePicker label="" inputs={[]} />);

    const datePickerAndriod = wrapper.getByTestId('android-datepicker');

    expect(datePickerAndriod).toBeTruthy();

    Platform.OS = 'ios';
    wrapper.rerender(<DatePicker label="" inputs={[]} />);

    const datePickerIos = wrapper.getByTestId('ios-datepicker');

    expect(datePickerIos).toBeTruthy();
  });
});
