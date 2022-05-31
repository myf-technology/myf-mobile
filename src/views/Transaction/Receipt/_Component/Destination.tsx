import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const Destination = ({ content, discription }) => (
  <View style={styles.container}>
    <Spacer amount={2} />
    <View style={styles.origin}>
      <View>
        <Text textAlign="left" font="subhead">
          {discription}
        </Text>
      </View>
      <View style={styles.content}>
        <Text textAlign="left">{content}</Text>
      </View>
    </View>
  </View>
);
