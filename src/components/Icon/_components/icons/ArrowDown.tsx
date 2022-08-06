import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { inner = 'dark', fill = 'grey4', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props} ref={ref}>
    <Circle
      cx='12'
      cy='12'
      r='12'
      transform='rotate(-90 12 12)'
      fill={Colors[fill]}
      fill-opacity='0.45'
    />
    <Path
      d='M11.9998 14.5862L18.2928 8.29321C18.4803 8.10574 18.7346 8.00043 18.9998 8.00043C19.265 8.00043 19.5193 8.10574 19.7068 8.29321C19.8943 8.48074 19.9996 8.73505 19.9996 9.00021C19.9996 9.26538 19.8943 9.51969 19.7068 9.70721L12.7068 16.7072C12.5193 16.8947 12.265 17 11.9998 17C11.7346 17 11.4803 16.8947 11.2928 16.7072L4.29279 9.70721C4.10532 9.51969 4 9.26538 4 9.00021C4 8.73505 4.10532 8.48074 4.29279 8.29321C4.48031 8.10574 4.73462 8.00043 4.99979 8.00043C5.26495 8.00043 5.51926 8.10574 5.70679 8.29321L11.9998 14.5862Z'
      fill={Colors[inner]}
    />
  </Svg>
);

const ArrowDown = forwardRef(Component);

export default ArrowDown;
