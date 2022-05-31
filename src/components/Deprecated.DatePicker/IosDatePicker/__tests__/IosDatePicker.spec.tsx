import { render } from '@testing-library/react-native';

import { IosDatePicker } from '..';

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
  let wrapper = render(<IosDatePicker label="" inputs={[]} />);
  beforeEach(() => {
    wrapper = render(<IosDatePicker label="labelTest" inputs={iosIdInputs} />);
  });

  it('Should render IosDatePicker Component Correctly', () => {
    expect(wrapper.toJSON).toBeTruthy();
  });
  it('should pass a given text from label correctly', () => {
    wrapper.rerender(<IosDatePicker inputs={[]} label="labelTest" />);

    const iosTestID = wrapper.getByTestId('ios-label-datepicker');

    expect(iosTestID.props.children).toBe('labelTest');
  });
  it('should render iosDatePicker input correctly', () => {
    wrapper.rerender(<IosDatePicker inputs={iosIdInputs} label="" />);

    const input = wrapper.getAllByTestId('ios-input-placeholder');



    expect(input.length).toBe(iosIdInputs.length);

    expect(input[0].props.children).toBe(iosIdInputs[0].placeholder)
    expect(input[1].props.children).toBe(iosIdInputs[1].placeholder)
    expect(input[2].props.children).toBe(iosIdInputs[2].placeholder)
  });
});
