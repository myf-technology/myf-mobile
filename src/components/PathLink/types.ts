import { ReactChild } from 'react';
import { TextProps } from '../Text/types';

export interface PathLinkProps extends TextProps {
  onPress?: () => void;
  destination?: string;
  textColor?: string;
  children: ReactChild;
  disabled?: boolean;
}
