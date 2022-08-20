import {createElement} from 'react';
import {IIconFactoryProps} from './types';

export const IconFactory = ({svg, ...props}: IIconFactoryProps) => {
  return createElement(svg, {...props});
};
