import { RectButtonProps } from 'react-native-gesture-handler';

export enum ThemeMap {
  default = 'default',
}

export type ThemeLibrary = 'default';
export interface IButtonProps extends RectButtonProps {
  theme?: ThemeLibrary;
  title: string;
  suffixIcon: React.ReactNode;
}
