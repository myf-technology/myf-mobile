import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg width={9} height={16} viewBox="0 0 9 16" {...props} ref={ref}>
    <Path
      d="M2.41403 8L8.70703 14.293C8.8945 14.4805 8.99982 14.7348 8.99982 15C8.99982 15.2652 8.8945 15.5195 8.70703 15.707C8.5195 15.8945 8.26519 15.9998 8.00003 15.9998C7.73487 15.9998 7.48056 15.8945 7.29303 15.707L0.293031 8.707C0.10556 8.51947 0.000244141 8.26516 0.000244141 8C0.000244141 7.73484 0.10556 7.48053 0.293031 7.293L7.29303 0.293C7.48056 0.105529 7.73487 0.000213623 8.00003 0.000213623C8.26519 0.000213623 8.5195 0.105529 8.70703 0.293C8.8945 0.480528 8.99982 0.734836 8.99982 1C8.99982 1.26516 8.8945 1.51947 8.70703 1.707L2.41403 8Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const ArrowBack = forwardRef(Component);

export default ArrowBack;
