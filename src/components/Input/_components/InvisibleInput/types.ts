import { IIconNameProp } from '../../../Icon/types';
import { IInputProps } from '../Input/types';

export interface IInvisibleInputProps extends IInputProps {
  sufixIcon?: IIconNameProp;
  onArrowPress?: any | void;
  onChangeText?: any | void;
  arrowPosition?: number;
  loading?: boolean;
  arrowGo?: boolean;
  holder?: string;
  value?: string;
  label?: string;
  mask?: (string | RegExp)[];
}
