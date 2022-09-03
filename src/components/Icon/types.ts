import { ComponentClass, FunctionComponent, RefAttributes } from 'react';
import { SvgProps } from 'react-native-svg';

import { ColorNames } from '../../constants/Colors';

export interface ISvgIconProps extends SvgProps {
  fill?: ColorNames;
}

export interface IIconProps extends ISvgIconProps {
  name: IIconNameProp;
}

export enum IIconName {
  ArrowForward = 'ArrowForward',
  ArrowBack = 'ArrowBack',
  MyF = 'MyF',
}

export type IIconNameProp = 'ArrowForward' | 'ArrowBack' | 'MyF';

export type IElement =
  | string
  | FunctionComponent<SvgProps & RefAttributes<unknown>>
  | ComponentClass<SvgProps & RefAttributes<unknown>>;
