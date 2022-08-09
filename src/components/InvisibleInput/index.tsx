import { View } from 'react-native';
import { Input } from '../Input';
import { FlashInputProps } from './types';

export const InvisibleInput = ({
  noShadow,
  sufixIcon,
  mask,
  label,
  arrowPosition,
  ...rest
}: FlashInputProps) => {
  return (
    <View>
      <Input
        arrowPosition={arrowPosition}
        label={label}
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
