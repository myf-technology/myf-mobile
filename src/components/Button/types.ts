import {
  ButtonProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';

export enum Theme {
  yellow = 'yellow',
  white = 'white',
  transparent = 'transparent',
  red = 'red',
  dark = 'dark',
  green = 'green',
  disabled = 'disabled',
}
export interface Iprops extends ButtonProps {
  theme?: 'yellow' |'green' | 'red' | 'transparent' | 'dark' | 'disabled';
  onPress(ev: NativeSyntheticEvent<NativeTouchEvent>): void;
  text?: string;
  small?: boolean;
  testID?: string;
  loading?: boolean;
}
