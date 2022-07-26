import { View } from 'react-native';
import { Input } from '../../../../../components/Input';
import styles from '../../styles';
import { iProps } from './types';

export const FlashInput = ({
  value,
  onArrowPress,
  onChangeText,
  loading,
  arrowForward,
  holder
}: iProps) => {
  return (
    <View style={styles.input}>
      <Input
        value={value}
        onArrowPress={onArrowPress}
        arrowForward={arrowForward}
        onChangeText={onChangeText}
        textColor='dark'
        backgroundColor='white'
        placeholder={holder}
        loading={loading}
      />
    </View>
  );
};
