import { fireEvent, render } from '@testing-library/react-native';

import { Input } from '..';
import Colors from '../../../constants/Colors';

/* eslint-disable max-len */
/**
 * 1. se o componente foi renderizado. √
 * 2. quando passar uma funcao para onChangeText essa função tem que ser executada quando algo é digitado no input. √
 * 3. quando validateOnBlur for TRUE e errorMessage NAO for '', quando houver evento de blur, borderColor e color precisam ser igual a Colors.red
 * 4. quando validateOnBlur for TRUE e successValidation for TRUE, quando houver evento de blur, borderColor e color precisam ser Colors.green
 * 5. quando validateOnBlur for FALSE e errorMessage for '', quando houver evento de blur, borderColor e color precisam ser Colors.black
 * 6. quando validateOnBlur for FALSE e successValidation for TRUE, quando houver evento de blur, borderColor e color precisam ser Colors.black
 * 7. quando validateAsync for TRUE e tiver alguma string em errorMessage, borderColor e color precisam ser Colors.red
 * 8. quando validateAsync for FALSE e tiver alguma string em errorMessage, borderColor e color precisam ser Colors.black
 */

describe('<Input />', () => {
  it('Should render input component correctly', () => {
    const wrapper = render(
      <Input
        onChangeText={() => ''}
        successValidation
        validateAsync
        validateOnBlur
      />
    );

    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('Should run a function when onPress prop is called', () => {
    const mockFunction = jest.fn();

    const wrapper = render(
      <Input
        onChangeText={mockFunction}
        successValidation
        validateAsync
        validateOnBlur
      />
    );

    const TextInput = wrapper.getByTestId('textinput-input-component');

    fireEvent(TextInput, 'onChangeText', 'i changed!');

    expect(mockFunction).toBeCalled();
  });

  it.skip('should render with the correct color theme', () => {
    const { getByTestId } = render(
      <Input
        onChangeText={() => ''}
        successValidation={false}
        validateAsync={false}
        validateOnBlur={true}
        errorMessage="test error message"
      />
    );

    const TextInput = getByTestId('textinput-input-component');

    const styles = TextInput.props.style[1];

    fireEvent.changeText(TextInput, 'testing text');
    fireEvent(TextInput, 'blur');

    expect(styles.color).toEqual(Colors.red);
  });
});
