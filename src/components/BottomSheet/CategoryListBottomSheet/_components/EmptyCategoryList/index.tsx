/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import { width } from '../../../../../constants';
import { Text } from '../../../../Text';
import styles from './styles';

interface EmptyCategoryListProps {
  message?: string | null;
}

export const EmptyCategoryList = ({ message }: EmptyCategoryListProps) => {
  return (
    <View style={styles.textContainer}>
      <Text typography="title1" style={styles.text} color="white">
        {message}
      </Text>
    </View>
  );
};
