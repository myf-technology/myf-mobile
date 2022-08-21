/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import textColorMapper from './helpers/textColorMapper';
import styles from './styles';
import { Iprops, Theme } from './types';

import { Text } from '../Text';
import { Colors, width } from '../../constants';

export const Button = ({
  small = false,
  onPress,
  theme = Theme.dark,
  testID,
  title,
  loading = false,
  ...rest
}: Iprops) => {
  const [smallSize, setSizeSmall] = useState(false);

  // useEffect(() => (small ? setSizeSmall(true) : setSizeSmall(false)));

  return (
    <TouchableOpacity
      testID={testID ? testID : 'button-component'}
      onPress={onPress}
      style={[styles.baseButton, styles[theme], smallSize && styles.sizeSmall]}
      {...rest}>
      <Text color="white">{title}</Text>
      {loading && (
        <ActivityIndicator style={{ position: 'absolute', right: width(6) }} />
      )}
    </TouchableOpacity>
  );
};
