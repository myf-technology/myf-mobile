import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ActivityIndicator,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import {inputStyles, styles} from './styles';

import {Colors} from '../../../../constants';
import {width} from '../../../../constants/Responsive';
import {Icon, Text, Spacer} from '../../../';
import {IInputProps} from './types';

export const Input = ({
  mask,
  refs,
  noShadow,
  label = '',
  fontSize = 16,
  eyeIcon,
  textColor = 'white',
  backgroundColor = 'black',
  onChangeText,
  errorMessage = '',
  placeholderAlign = 'left',
  passwordMode = false,
  toggleVisibility,
  arrowGo,
  sufixIcon = 'ArrowForward',
  loading,
  onArrowPress,
  containerTestID,
  arrowPosition,
  ...rest
}: IInputProps) => {
  const [iconVisible, setIconVisible] = useState(false);
  const [value, setValue] = useState('');
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
    passwordMode && setIconVisible(true);
  }, [passwordMode, setIconVisible]);

  useEffect(() => {
    const shouldSetError = errorMessage !== '';

    shouldSetError && setTextColors(Colors.red);
    !shouldSetError && setTextColors(Colors.white);
  }, [errorMessage]);

  const changeHandler = (_: string, text: string) => {
    onChangeText && onChangeText(text);
    setValue(text);
  };

  return (
    <View testID={containerTestID}>
      {label ? (
        <Text color={textColor} textAlign="left" typography="callout">
          {label}
        </Text>
      ) : null}

      <MaskInput
        style={inputStyles({
          noShadow,
          fontSize,
          placeholderAlign,
          textColor,
          backgroundColor,
        })}
        numberOfLines={1}
        ref={refs}
        placeholderTextColor={Colors.white}
        testID="textinput-input-component"
        onChangeText={changeHandler}
        secureTextEntry={passwordMode}
        mask={mask}
        value={value}
        {...rest}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {arrowGo ? (
        <TouchableOpacity
          onPress={() => onArrowPress && onArrowPress()}
          style={{position: 'absolute', top: arrowPosition, left: width(80)}}>
          {loading ? (
            <ActivityIndicator
              color={Colors.yellow}
              style={{right: width(3), bottom: width(1)}}
            />
          ) : (
            <Icon fill="yellow" name={sufixIcon} />
          )}
        </TouchableOpacity>
      ) : null}
      {eyeIcon ? (
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeWrapper}>
          {iconVisible &&
            (passwordMode ? (
              <Icon fill="yellow2" name="ArrowForward" />
            ) : (
              <Icon fill="yellow2" name="ArrowForward" />
            ))}
        </TouchableOpacity>
      ) : null}
      <Spacer amount={2} />
      <Text color="white" textAlign="left" typography="callout">
        {isErrorState && errorMessage}
      </Text>
    </View>
  );
};
