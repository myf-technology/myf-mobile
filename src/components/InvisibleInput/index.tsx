import { View } from 'react-native';
import { Input } from '../Input';
import { FlashInputProps } from '../../views/register/Password/_components/FlashInput/types';

export const InvisibleInput = ({ ...rest }: FlashInputProps) => {
  return (
    <View>
      <Input textColor='yellow3' noShadow autoFocus {...rest} />
    </View>
  );
};
