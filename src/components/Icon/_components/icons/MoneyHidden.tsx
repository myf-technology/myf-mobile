import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    ref={ref}
    width="85"
    height="20"
    viewBox="0 0 85 20"
    fill="none"
    {...props}
  >
    <Circle cx="10.5" cy="10.5" r="4.5" fill={Colors[fill]} />
    <Circle cx="30.5" cy="10.5" r="4.5" fill={Colors[fill]} />
    <Circle cx="50.5" cy="10.5" r="4.5" fill={Colors[fill]} />
    <Circle cx="70.5" cy="10.5" r="4.5" fill={Colors[fill]} />
  </Svg>
);

const MoneyHidden = forwardRef(Component);

export default MoneyHidden;
