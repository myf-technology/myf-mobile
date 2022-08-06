import { View } from 'react-native';
import { Input } from '../Input';
import { FlashInputProps } from './types';

export const InvisibleInput = ({ noShadow, sufixIcon, mask, ...rest }: FlashInputProps) => {
  return (
    <View>
      <Input
        fontSize={20}
        sufixIcon={sufixIcon}
        textColor='yellow3'
        noShadow
        autoFocus
        mask={mask}
        {...rest}
      />
    </View>
  );
};
