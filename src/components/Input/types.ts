import { TextInputProps } from 'react-native';

import { colorTypes } from '../../constants/Colors';
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
  placeholderAlign?: textAlignType;
  refs?: any;
  passwordMode?: boolean;
  toggleVisibility?(): void;
  containerTestID?: string;
}
