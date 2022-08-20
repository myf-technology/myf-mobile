import {width} from '.';

export type TypographyLibrary =
  | 'caption'
  | 'footnote'
  | 'subhead'
  | 'callout'
  | 'body'
  | 'headline'
  | 'title1'
  | 'largeTitle';

export enum TypographyMap {
  caption = 'caption',
  footnote = 'footnote',
  subhead = 'subhead',
  callout = 'callout',
  body = 'body',
  headline = 'headline',
  title = 'title',
  largeTitle = 'largeTitle',
}

export enum TypographySizeMap {
  caption = width(3.5), // 14
  footnote = width(3.7), // 16
  subhead = width(5), // 20
  callout = width(5.4), // 22
  body = width(7.2),
  headline = width(9.2),
  title = width(10),
  largeTitle = width(11),
}

export enum TypographyWeightMap {
  bold = 'bold',
  regular = 'regular',
}
