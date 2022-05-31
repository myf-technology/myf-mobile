import { View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Iprops } from './types';

import { Text } from '../Text';

export const Radio = (props: Iprops) => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <View style={styles.radio}>
      {props.checked && <View style={styles.checked} />}
    </View>
    <Text textAlign="left">{props.text}</Text>
  </TouchableOpacity>
);
