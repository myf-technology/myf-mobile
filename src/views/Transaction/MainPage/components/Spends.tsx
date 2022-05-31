import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../components/Icon';
import { Text } from '../../../../components/Text';
import styles from '../Styles';

export const Spend = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={props.icon} />
      </View>
      <View style={styles.category}>
        <Text textAlign="left">{props.category}</Text>
        <Text textAlign="left" font="subhead">
          {props.brand}
        </Text>
      </View>
      <View style={styles.price}>
        <Text textAlign="right">R$ {props.spend}</Text>
        <Text textAlign="right">{props.date}</Text>
      </View>
      <View style={styles.suffix}>
        <Icon name="ArrowForward" />
      </View>
    </View>
  </TouchableOpacity>
);
