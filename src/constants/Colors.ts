export enum Colors {
  dark = '#151618',
  grey = '#333333',
  grey2 = '#4F4F4F',
  grey3 = '#828282',
  grey4 = '#ECECEC',
  white = '#FFFFFF',
  white2 = '#ECECEC',
  green = '#004D40',
  red = '#EB0707',
  yellow = '#FAD826',
  yellow3 = '#FFF4B9',
  yellow4 = '#655502',
  blue = '#03259F',
  blue2 = '#07C4FF',
  purple = '#6917D2',
  purple2 = '#E88BFF',
  purple3 = '#F2C0FF',
  purple4 = '#1A0633',
  black = '#000000',
  deepBlue = '#00104A'
}

export type colorTypes =
  | 'dark'
  | 'black'
  | 'grey'
  | 'grey2'
  | 'grey3'
  | 'grey4'
  | 'white'
  | 'white2'
  | 'green'
  | 'blue'
  | 'blue2'
  | 'deepBlue'
  | 'red'
  | 'purple'
  | 'purple2'
  | 'purple3'
  | 'purple4'
  | 'yellow3'
  | 'yellow4'
  | 'yellow';

export default Colors;
