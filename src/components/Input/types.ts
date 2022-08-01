import { TextInputProps } from 'react-native';

import { colorTypes } from '../../constants/Colors';
import { iconNameProp } from '../Icon/types';
import { textAlignType } from '../Text/types';

export interface Iprops extends TextInputProps {
  mask?: Array<string | RegExp>;
  onChangeText?(text: string): void;
  errorMessage?: string;
  successValidation?: boolean;
  fontSize?: number;
  eyeIcon?: boolean;
  textColor?: colorTypes;
  validateAsync?: boolean;
  backgroundColor?: colorTypes;
  label?: string;
  noShadow?: boolean;
  placeholderAlign?: textAlignType;
  refs?: any;
  arrowType?: iconNameProp;
  loading?: boolean;
  arrowGo?: any | boolean;
  onArrowPress?: () => void;
  passwordMode?: boolean;
  toggleVisibility?(): void;
  containerTestID?: string;
}
