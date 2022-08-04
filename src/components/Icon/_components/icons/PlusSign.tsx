import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Defs, Image, Line, Path, Pattern, Rect, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'white', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg width='15' height='15' viewBox='0 0 48 48' fill={Colors[fill]}>
    <Path
      d='M19.9773 47.0284V0.153406H27.9318V47.0284H19.9773ZM0.517046 27.5682V19.6136H47.392V27.5682H0.517046Z'
      fill='white'
    />
  </Svg>
);

const PlusSign = forwardRef(Component);

export default PlusSign;
