import { TextInputProps } from 'react-native';

import { colorTypes } from '../../constants/Colors';
import { iconNameProp } from '../Icon/types';
import { textAlignType } from '../Text/types';

export interface Iprops extends TextInputProps {
  onChangeText?(text: string): void;
  placeholderAlign?: textAlignType;
  mask?: Array<string | RegExp>;
  backgroundColor?: colorTypes;
  successValidation?: boolean;
  toggleVisibility?(): void;
  onArrowPress?: () => void;
  containerTestID?: string;
  sufixIcon?: iconNameProp;
  arrowGo?: any | boolean;
  validateAsync?: boolean;
  arrowPosition?: number;
  passwordMode?: boolean;
  textColor?: colorTypes;
  errorMessage?: string;
  noShadow?: boolean;
  loading?: boolean;
  fontSize?: number;
  eyeIcon?: boolean;
  label?: string;
  refs?: any;
}
