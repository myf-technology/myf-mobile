import {TextInputProps} from 'react-native';

import {ColorNames} from '../../../../constants';
import {IIconNameProp} from '../../../Icon/types';
import {TextAlignLibrary} from '../../../Text/types';

export interface IInputProps extends TextInputProps {
  onChangeText?(text: string): void;
  placeholderAlign?: TextAlignLibrary;
  mask?: Array<string | RegExp>;
  backgroundColor?: ColorNames;
  successValidation?: boolean;
  toggleVisibility?(): void;
  onArrowPress?: () => void;
  containerTestID?: string;
  sufixIcon?: IIconNameProp;
  arrowGo?: any | boolean;
  validateAsync?: boolean;
  arrowPosition?: number;
  passwordMode?: boolean;
  textColor?: ColorNames;
  errorMessage?: string;
  noShadow?: boolean;
  loading?: boolean;
  fontSize?: number;
  eyeIcon?: boolean;
  label?: string;
  refs?: any;
}
