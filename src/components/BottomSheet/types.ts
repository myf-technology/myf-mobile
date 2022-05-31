import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface Iprops {
  snapPoints: Array<number>;
  style?: ViewStyle;
  children: ReactNode;
}

export interface bottomSheetRefProps {
  translationY: number;
}
