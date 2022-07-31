import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ActivityIndicator
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { width } from '../../constants/responsive';
import { Spacer } from '../Spacer';
import { Text } from '../Text';
import { Icon } from '../Icon';

export const Input = ({
  mask,
  refs,
  noShadow,
  label = '',
  fontSize = 16,
  eyeIcon,
  textColor = 'white',
  backgroundColor = 'dark',
  onChangeText,
  errorMessage = '',
  placeholderAlign = 'left',
  passwordMode = false,
  toggleVisibility,
  arrowForward,
  loading,
  onArrowPress,
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
        <Text color={colors} textAlign='left' font='callout'>
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
            shadowOffset: {
              width: noShadow ? null : 1,
              height: noShadow ? null : 4
            },
            shadowOpacity: noShadow ? null : 0.14,
            shadowRadius: noShadow ? null : 4,

            elevation: noShadow ? null : 10
          }
        ]}
        numberOfLines={1}
        ref={refs}
        placeholderTextColor={Colors.grey3}
        testID='textinput-input-component'
        onChangeText={changeHandler}
        secureTextEntry={passwordMode}
        mask={mask}
        value={value}
        {...rest}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {arrowForward ? (
        <TouchableOpacity
          onPress={() => onArrowPress()}
          style={{ position: 'absolute', top: width(10), left: width(80) }}
        >
          {loading ? (
            <ActivityIndicator
              color={Colors.yellow}
              style={{ right: width(3), bottom: width(1) }}
            />
          ) : (
            <Icon fill='yellow' name='ArrowForward' />
          )}
        </TouchableOpacity>
      ) : null}
      {eyeIcon ? (
        <TouchableOpacity onPress={toggleVisibility} style={styles.eyeWrapper}>
          {iconVisible &&
            (passwordMode ? (
              <Icon fill='yellow4' name='Eye' />
            ) : (
              <Icon fill='yellow4' name='Eye' />
            ))}
        </TouchableOpacity>
      ) : null}
      <Spacer amount={2} />
      <Text color={Colors.red} textAlign='left' font='callout'>
        {isErrorState && errorMessage}
      </Text>
    </View>
  );
};
