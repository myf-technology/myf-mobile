import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../../../../constants';
import {ISvgIconProps} from '../../types';
import {IconFactory} from '../../_components/IconFactory';

export const ArrowForward = ({fill = 'white', ...props}: ISvgIconProps) => (
  <IconFactory
    svg={() => (
      <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" {...props}>
        <Path
          d="M6.58572 7.99973L0.292724 1.70673C0.105253 1.5192 -6.23233e-05 1.26489 -6.23465e-05 0.999726C-6.23697e-05 0.734562 0.105253 0.480254 0.292724 0.292726C0.480252 0.105255 0.73456 -6.03126e-05 0.999724 -6.03358e-05C1.26489 -6.0359e-05 1.5192 0.105255 1.70672 0.292726L8.70672 7.29273C8.8942 7.48025 8.99951 7.73456 8.99951 7.99973C8.99951 8.26489 8.8942 8.5192 8.70672 8.70673L1.70673 15.7067C1.5192 15.8942 1.26489 15.9995 0.999725 15.9995C0.734561 15.9995 0.480253 15.8942 0.292726 15.7067C0.105254 15.5192 -6.10994e-05 15.2649 -6.11226e-05 14.9997C-6.11457e-05 14.7346 0.105254 14.4803 0.292725 14.2927L6.58572 7.99973Z"
          fill={Colors[fill]}
        />
      </Svg>
    )}
  />
);
