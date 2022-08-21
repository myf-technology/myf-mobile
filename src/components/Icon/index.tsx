import { createElement } from 'react';
import { View } from 'react-native';

import * as icons from './iconLib';
import { IElement, IIconName, IIconProps } from './types';

export const Icon = ({ name, ...props }: IIconProps) => {
  switch (name) {
    case IIconName[name]:
      return createElement(icons[name] as IElement, props);
    default:
      return <View />;
  }
};
