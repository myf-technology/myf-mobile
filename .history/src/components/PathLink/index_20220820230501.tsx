// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { PathLinkProps } from './types';

import { Text } from '../Text';

export const PathLink = ({
  destination,
  children,
  disabled,
  textColor,
  onPress,
  ...props
}: PathLinkProps) => {
  // const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      disabled={disabled}
      // onPress={() => {
      //   destination && navigate(destination as never);
      //   onPress && onPress();
      // }}
    >
      <View>
        <Text color={textColor} textDecorationLine="underline" {...props}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
