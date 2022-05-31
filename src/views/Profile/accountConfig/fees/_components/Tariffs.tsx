import { View } from 'react-native';

import { Text } from '../../../../../components/Text';
import styles from '../Styles';

export const Tariffs = (props) => (
  <View style={styles.tariffs}>
    <View style={styles.descrition}>
      <Text textAlign="left">{props.children}</Text>
    </View>
    <View>
      <Text font="subhead">{props.status}</Text>
    </View>
  </View>
);
