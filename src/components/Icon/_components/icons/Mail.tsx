import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    ref={ref}
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    {...props}
  >
    <Path
      d="M0.839355 0H15.165C15.121 0.0533878 15.0949 0.0893341 15.0646 0.121287C12.8792 2.42283 10.6936 4.72412 8.50766 7.02513C8.17251 7.37787 7.82897 7.3764 7.49348 7.02307C5.30802 4.7215 3.12282 2.41976 0.937874 0.11784C0.909698 0.0881552 0.885159 0.0548622 0.839355 0Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.829102 10.5142C2.34213 8.92095 3.82945 7.35475 5.36579 5.73682C5.39516 5.7942 5.40966 5.84926 5.44404 5.88572C5.96314 6.43661 6.48395 6.98592 7.00645 7.53363C7.46519 8.0135 8.06306 8.12781 8.62043 7.82915C8.76717 7.75052 8.89907 7.63287 9.01581 7.51201C9.55467 6.95394 10.0858 6.38839 10.6199 5.82576C10.6382 5.80912 10.6574 5.79341 10.6773 5.77869L15.1749 10.5141L0.829102 10.5142Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0 10.3103V0.156738L4.84634 5.25939L0.0306218 10.33L0 10.3103Z"
      fill={Colors[fill]}
    />
    <Path
      d="M15.9723 10.3295L11.1572 5.25986L15.9693 0.193848L15.9999 0.210017V10.3052L15.9723 10.3295Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Mail = forwardRef(Component);

export default Mail;
