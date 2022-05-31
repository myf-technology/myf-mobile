import { render } from '@testing-library/react-native';

import { AndroidDatePicker } from '..';

const androidInputs = [
  {
    key: 'day',
    value: '',
    placeholder: 'Dia',
  },
  {
    key: 'month',
    value: '',
    placeholder: 'Mês',
  },
  {
    key: 'year',
    value: '',
    placeholder: 'Ano',
  },
];

describe('<AndroidDatePicker />', () => {
  let wrapper = render(
    <AndroidDatePicker label="label tested" inputs={androidInputs} />
  );

  beforeEach(() => {
    wrapper = render(
      <AndroidDatePicker label="label tested" inputs={androidInputs} />
    );
  });
  it('should be rendered correctly', () => {
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('should rendered correctly inputs from androidDatePicker component', () => {
    const androidDatePickerInput = wrapper.getAllByTestId(
      'android-datepicker-input'
    );

    expect(androidDatePickerInput.length).toBe(androidInputs.length);

    expect(androidDatePickerInput[0].props.placeholder).toBe(
      androidInputs[0].placeholder
    );

    expect(androidDatePickerInput[1].props.placeholder).toBe(
      androidInputs[1].placeholder
    );
    expect(androidDatePickerInput[2].props.placeholder).toBe(
      androidInputs[2].placeholder
    );
  });
  it('should pass a given string from label ', () => {
    const androidDatePickerLabel = wrapper.getByTestId(
      'label-android-datepicker'
    );

    expect(androidDatePickerLabel.props.children).toBe('label tested');
  });
});
