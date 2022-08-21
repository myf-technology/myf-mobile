import { TextInputProps } from 'react-native';
import { IIconNameProp } from '../../../components/Icon/types';

export interface IEmail extends TextInputProps {
  sufixIcon?: IIconNameProp;
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
