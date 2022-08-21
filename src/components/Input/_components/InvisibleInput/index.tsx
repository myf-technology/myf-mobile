import { View } from 'react-native';
import { Input } from '../Input';
import { IInvisibleInputProps } from './types';

export const InvisibleInput = ({
  sufixIcon,
  mask,
  label,
  arrowPosition,
  ...rest
}: IInvisibleInputProps) => {
  return (
    <View>
      <Input
        arrowPosition={arrowPosition}
        label={label}
        fontSize={20}
        sufixIcon={sufixIcon}
        textColor="yellow2"
        noShadow
        autoFocus
        mask={mask}
        {...rest}
      />
    </View>
  );
};
