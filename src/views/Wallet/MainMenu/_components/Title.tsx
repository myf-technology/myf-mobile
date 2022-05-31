import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import styles from '../Styles';

export const Title = (props) => (
  <View style={styles.text}>
    <Spacer amount={2} />
    <Text font="subhead" textAlign="left">
      {props.text}
    </Text>
    <Spacer amount={1} />
  </View>
);
