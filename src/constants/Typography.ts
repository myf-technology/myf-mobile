import Layout from './Layout';
import { width } from './responsive';

export type fontType =
  | 'title'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote';

export enum Font {
  title = 'title',
  title2 = 'title2',
  title3 = 'title3',
  title4 = 'title4',
  body = 'body',
  callout = 'callout',
  subhead = 'subhead',
  footnote = 'footnote',
}
export enum FontSize {
  title = width(7.2),
  title2 = Layout.window.width * 0.054, // 22
  title3 = Layout.window.width * 0.05, // 20
  title4 = width(9.2),
  body = Layout.window.width * 0.037, // 16
  subhead = Layout.window.width * 0.035, // 14
}

export enum FontWeight {
  bold = 'bold',
  normal = 'normal',
}
