import { render } from '@testing-library/react-native';

import { DatePicker } from '..';

const iosIdInputs = [
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

describe('<IosDatePicker / >', () => {
  let wrapper = render(<DatePicker label="" inputs={[]} />);
  beforeEach(() => {
    wrapper = render(<DatePicker label="labelTest" inputs={iosIdInputs} />);
  });

  it('Should render DatePicker Component Correctly', () => {
    expect(wrapper.toJSON).toBeTruthy();
  });
  it('should pass a given text from label correctly', () => {
    wrapper.rerender(<DatePicker inputs={[]} label="labelTest" />);

    const iosTestID = wrapper.getByTestId('ios-label-datepicker');

    expect(iosTestID.props.children).toBe('labelTest');
  });
  it('should render iosDatePicker input correctly', () => {
    wrapper.rerender(<IosDatePicker inputs={iosIdInputs} label="" />);

    const input = wrapper.getAllByTestId('ios-input-placeholder');

    expect(input.length).toBe(iosIdInputs.length);

    expect(input[0].props.children).toBe(iosIdInputs[0].placeholder);
    expect(input[1].props.children).toBe(iosIdInputs[1].placeholder);
    expect(input[2].props.children).toBe(iosIdInputs[2].placeholder);
  });
});
