export enum Theme {
  yellow = 'yellow',
  transparent = 'transparent',
  dark = 'dark',
}
export interface Iprops {
  theme?: Theme;
  onPress?(): void;
  text?: string;
  small?: boolean;
}
