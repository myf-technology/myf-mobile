import { TextInputProps } from 'react-native';
import { iconNameProp } from '../Icon/types';

export interface FlashInputProps extends TextInputProps {
  sufixIcon?: iconNameProp;
  onArrowPress?: any | void;
  onChangeText?: any | void;
  noShadow?: boolean;
  loading?: boolean;
  arrowGo?: boolean;
  holder?: string;
  value?: string;
  mask?: (string | RegExp)[];
}
