import { View } from 'react-native';
import { Input } from '../Input';
import { FlashInputProps } from './types';

export const InvisibleInput = ({ noShadow, sufixIcon, ...rest }: FlashInputProps) => {
  return (
    <View>
      <Input sufixIcon={sufixIcon} textColor='yellow' noShadow autoFocus {...rest} />
    </View>
  );
};
