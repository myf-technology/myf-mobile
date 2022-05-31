import React from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import styles from '../Styles';

export const Initials = (props) => (
  <View style={{ alignItems: 'center' }}>
    <View style={styles.initialContainer}>
      <Text color={Colors.grey2} font="title">
        {props.initial}
      </Text>
    </View>
    <Text color={Colors.grey4} font="title">
      {props.children}
    </Text>
  </View>
);
