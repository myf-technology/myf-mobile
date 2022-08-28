import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export const ManageCategoryLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};
