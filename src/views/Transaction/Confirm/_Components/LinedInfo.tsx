import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const LinedInfo = ({ title, content }) => (
  <View style={styles.linedInfo}>
    <View>
      <Text font="subhead" textAlign="left">
        {title}
      </Text>
    </View>
    <View>
      <Text textAlign="right">{content}</Text>
    </View>
  </View>
);
