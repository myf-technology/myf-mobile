import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { PathLinkProps } from './types';

import { Text } from '../Text';
import Colors from '../../constants/Colors';

export const PathLink = ({
  destination,
  children,
  textColor,
  onPress,
  ...props
}: PathLinkProps) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        destination && navigate(destination as never);
        onPress && onPress();
      }}
    >
      <View>
        <Text color={textColor} textDecorationLine='underline' {...props}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
