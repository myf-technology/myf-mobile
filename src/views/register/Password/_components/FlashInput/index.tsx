import { View } from 'react-native';
import { Input } from '../../../../../components/Input';
import { Spacer } from '../../../../../components/Spacer';
import styles from '../../styles';
import { FlashInputProps } from './types';

export const FlashInput = ({ ...rest }: FlashInputProps) => {
  return (
    <View style={styles.input}>
      <Spacer amount={30} />
      <Input textColor='yellow3' noShadow autoFocus {...rest} />
    </View>
  );
};
