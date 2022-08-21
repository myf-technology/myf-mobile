import { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ActivityIndicator,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import { inputStyles, styles } from './styles';

import { Colors } from '../../../../constants';
import { width } from '../../../../constants/Responsive';
import { Icon, Text, Spacer } from '../../../';
import { IInputProps } from './types';

export const Input = ({
  mask,
  textColor = 'white',
  errorMessage = '',
  placeholderAlign = 'left',
  passwordMode = true,
  toggleVisibility,
  arrowGo,
  sufixIcon = 'ArrowForward',
  loading,
  onArrowPress,
  containerTestID,
  arrowPosition,
  refs,
  ...rest
}: IInputProps) => {
  const [eyeIconVisibility, setEyeIconVisibility] = useState(false);
  const [textcolors, setTextColors] = useState(Colors.black);

  const isErrorState = textcolors === Colors.red;

  const focusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    rest?.onFocus && rest?.onFocus(e);
    setTextColors(Colors.black);
  };

  const blurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    rest?.onBlur && rest?.onBlur(e);

    const shouldSetError = errorMessage !== '';

    shouldSetError && setTextColors(Colors.red);
  };

  useEffect(() => {
    passwordMode && setEyeIconVisibility(true);
  }, [passwordMode, setEyeIconVisibility]);

  useEffect(() => {
    const shouldSetError = errorMessage !== '';

    shouldSetError && setTextColors(Colors.red);
    !shouldSetError && setTextColors(Colors.white);
  }, [errorMessage]);

  return (
    <View testID={containerTestID}>
      <MaskInput
        style={inputStyles({
          placeholderAlign,
          textColor,
        })}
        numberOfLines={1}
        refs={refs}
        placeholderTextColor={Colors.white}
        testID="textinput-input-component"
        secureTextEntry={passwordMode}
        mask={mask}
        value=""
        {...rest}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {arrowGo ? (
        <TouchableOpacity
          onPress={() => onArrowPress && onArrowPress()}
          style={{ position: 'absolute', top: arrowPosition, left: width(80) }}>
          {loading ? (
            <ActivityIndicator
              color={Colors.yellow}
              style={{ right: width(3), bottom: width(1) }}
            />
          ) : (
            <Icon fill="yellow" name={sufixIcon} />
          )}
        </TouchableOpacity>
      ) : null}
      {eyeIconVisibility && (
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeWrapper}>
          {passwordMode ? (
            <Icon fill="yellow2" name="ArrowForward" />
          ) : (
            <Icon fill="yellow2" name="ArrowForward" />
          )}
        </TouchableOpacity>
      )}
      <Spacer amount={2} />
      <Text color="white" textAlign="left" typography="callout">
        {isErrorState && errorMessage}
      </Text>
    </View>
  );
};
