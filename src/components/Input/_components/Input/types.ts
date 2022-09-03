import React from 'react';
import { TextInputProps } from 'react-native';
import { Mask } from 'react-native-mask-input';

export interface IInputProps extends TextInputProps {
  mask?: Mask;
  inputSize?: number;
  errorMessage?: string;
  passwordMode?: boolean;
  suffixIcon?: () => React.ReactNode;
}
