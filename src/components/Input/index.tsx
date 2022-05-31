import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

export const Input = ({
  mask,
  refs,
  label = '',
  fontSize,
  eyeIcon,
  textColor = 'white',
  backgroundColor = 'dark',
  onChangeText,
  errorMessage = '',
  placeholderAlign = 'left',
  passwordMode = false,
  toggleVisibility,
  containerTestID,
  ...rest
}: Iprops) => {
  const [iconVisible, setIconVisible] = useState(false);
  const [value, setValue] = useState('');
  const [colors, setColors] = useState(Colors.dark);

  const isErrorState = colors === Colors.red;

  const focusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    rest?.onFocus && rest?.onFocus(e);
    setColors(Colors.dark);
  };

  const blurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    rest?.onBlur && rest?.onBlur(e);

    const shouldSetError = errorMessage !== '';

    shouldSetError && setColors(Colors.red);
  };

  useEffect(() => {
    passwordMode && setIconVisible(true);
  }, []);

  useEffect(() => {
    const shouldSetError = errorMessage !== '';

    shouldSetError && setColors(Colors.red);
    !shouldSetError && setColors(Colors.white);
  }, [errorMessage]);

  const changeHandler = (mask: string, text: string) => {
    onChangeText && onChangeText(text);
    setValue(text);
  };

  return (
    <View testID={containerTestID}>
      {label ? (
        <Text color={colors} textAlign="left" font="callout">
          {label}
        </Text>
      ) : null}

      <MaskInput
        style={[
          styles.input,
          {
            textAlign: placeholderAlign,
            borderColor: isErrorState ? Colors.red : 'transparent',
            fontSize,
            backgroundColor: Colors[backgroundColor],
            color: Colors[textColor],
          },
        ]}
        numberOfLines={1}
        ref={refs}
        placeholderTextColor={Colors.dark}
        testID="textinput-input-component"
        onChangeText={changeHandler}
        secureTextEntry={passwordMode}
        mask={mask}
        value={value}
        {...rest}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {eyeIcon ? (
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeWrapper}>
          {iconVisible &&
            (passwordMode ? (
              <Ionicons name="md-eye-off" size={width(5.63)} />
            ) : (
              <Ionicons name="md-eye" size={width(5.63)} />
            ))}
        </TouchableOpacity>
      ) : null}
      <Spacer amount={2} />
      <Text color={Colors.red} textAlign="left" font="callout">
        {isErrorState && errorMessage}
      </Text>
    </View>
  );
};
