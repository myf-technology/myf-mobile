import { View } from 'react-native';

import styles from './styles';

import { Text } from '../../../../../components/Text';

export const Details = ({ title, content }) => (
  <View style={styles.details}>
    <Text>{title}</Text>
    <Text>{content}</Text>
  </View>
);
