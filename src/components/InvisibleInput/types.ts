import { TextInputProps } from 'react-native';
import { iconNameProp } from '../Icon/types';

export interface FlashInputProps extends TextInputProps {
  sufixIcon?: iconNameProp;
  onArrowPress?: any | void;
  onChangeText?: any | void;
  arrowPosition?: number;
  noShadow?: boolean;
  loading?: boolean;
  arrowGo?: boolean;
  holder?: string;
  value?: string;
  label?: string;
  mask?: (string | RegExp)[];
}
