import { View } from 'react-native';
import { Input } from '../../../../../components/Input';
import { Spacer } from '../../../../../components/Spacer';
import { FlashInputProps } from '../../../Password/_components/FlashInput/types';
import styles from '../../styles';

export const FlashInput = ({ ...rest }: FlashInputProps) => {
  return (
    <View>
      <Spacer amount={30} />
      <Input textColor='yellow3' noShadow autoFocus {...rest} />
    </View>
  );
};
