import { TextInputProps } from 'react-native';
import { iconNameProp } from '../Icon/types';

export interface FlashInputProps extends TextInputProps {
  value?: string;
  onArrowPress?: any | void;
  onChangeText?: any | void;
  loading?: boolean;
  arrowGo?: boolean;
  sufixIcon?: iconNameProp;
  noShadow?: boolean;
  holder?: string;
}
