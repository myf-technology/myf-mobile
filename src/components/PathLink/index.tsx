import { useLinkProps, useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Iprops } from './types';

import Colors from '../../constants/Colors';
import { Text } from '../Text';

export const PathLink = ({ destination, children }: Iprops) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(destination);
      }}
    >
      <View>
        <Text textDecorationLine="underline" color={Colors.yellow}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
