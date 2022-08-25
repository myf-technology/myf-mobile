import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export const CategoryListLoading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator />
  </View>
);
