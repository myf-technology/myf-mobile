import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Text } from '../../../../components/Text';
import styles from '../styles';

export const SelectInput = ({ onPress, selected, arrowDown }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.selectInput}>
      <Text textAlign="left">{selected}</Text>
      <View style={styles.arrowDown}>
        {!arrowDown ? <Icon fill="white" name="ArrowDown" /> : <View></View>}
      </View>
    </View>
  </TouchableOpacity>
);
