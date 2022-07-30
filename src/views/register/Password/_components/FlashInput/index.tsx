import { View } from 'react-native';
import { Input } from '../../../../../components/Input';
import styles from '../../styles';
import { FlashInputProps } from './types';

export const FlashInput = ({ value, ...rest }: FlashInputProps) => {
  return (
    <View style={styles.input}>
      <Input textColor='dark' backgroundColor='white' {...rest} />
    </View>
  );
};
