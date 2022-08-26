import { View } from 'react-native';

import { Text } from '../../../Text';
import styles from '../../styles';
import { textFieldProps } from '../../types';

export const TextField = ({ text, font }: textFieldProps) => (
  <View style={styles.textWidthAdjust}>
    <Text typography={font}>{text}</Text>
  </View>
);
