import { LayoutRectangle, TextProps } from 'react-native';

import Colors from '../../constants/Colors';
import { fontType } from '../../constants/Typography';

export type textAlignType =
  | 'center'
  | 'left'
  | 'right'
  | 'auto'
  | 'justify'
  | undefined;

export interface Iprops extends TextProps {
  children: React.ReactNode;
  font?: fontType;
  color?: Colors;
  textAlign?: textAlignType;
  testID?: string;
  onMeasurement?: (layout: LayoutRectangle) => void;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
}
