import {LayoutRectangle, TextProps as RNTextProps} from 'react-native';

import {ColorNames, TypographyLibrary} from '../../constants';

export type TextAlignLibrary = 'center' | 'left' | 'right' | 'auto' | 'justify';

type DecorationLineLibrary =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

export interface ITextProps extends RNTextProps {
  children: React.ReactNode;
  typography?: TypographyLibrary;
  color?: ColorNames;
  textAlign?: TextAlignLibrary;
  testID?: string;
  onMeasurement?: (layout: LayoutRectangle) => void;
  textDecorationLine?: DecorationLineLibrary;
}
