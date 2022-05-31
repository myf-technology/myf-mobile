import { createElement } from 'react';
import { View } from 'react-native';

import * as icons from './_components';
import { element, iconName, Iprops } from './types';

export const Icon = ({ name, ...props }: Iprops) => {
  switch (name) {
    case iconName[name]:
      return createElement(icons[name] as element, props);
    default:
      return <View />;
  }
};
