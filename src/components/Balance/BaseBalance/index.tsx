import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import styles from './styles';
import { Iprops } from './types';

import { Text } from '../../Text';

export const BaseBalance = (props: Iprops) => (
  <View style={styles.container}>
    <Text color={Colors.white} textAlign="left" font="callout">
      Saldo Total
    </Text>
    <View style={styles.balance}>
      <Text color={Colors.white} font="title">
        R${'  0,00 '}
      </Text>
    </View>
  </View>
);
