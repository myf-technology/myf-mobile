import { KeyboardTypeOptions } from 'react-native';

export interface Iprops {
  title: string;
}

export type formStateType = {
  id: string;
  label: string;
  value: string;
  errorMessage: string;
  keyboardType: KeyboardTypeOptions | undefined;
  maxLength: number;
  mask?: Array<RegExp | string>;
}[];
