import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Line, Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    {...props}
    ref={ref}
  >
    <Line
      x1="1"
      y1="7"
      x2="14"
      y2="7"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
    <Line
      x1="7"
      y1="14"
      x2="7"
      y2="1"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

const PlusSign = forwardRef(Component);

export default PlusSign;
