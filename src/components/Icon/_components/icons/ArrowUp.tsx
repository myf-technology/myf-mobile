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
    width="17"
    height="10"
    viewBox="0 0 17 10"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M8.49973 2.91379L2.20672 9.20679C2.0192 9.39426 1.76489 9.49957 1.49972 9.49957C1.23456 9.49957 0.980253 9.39426 0.792725 9.20679C0.605254 9.01926 0.499939 8.76495 0.499939 8.49979C0.499939 8.23462 0.605254 7.98031 0.792725 7.79279L7.79273 0.792786C7.98025 0.605315 8.23456 0.5 8.49973 0.5C8.76489 0.5 9.0192 0.605315 9.20673 0.792786L16.2067 7.79279C16.3942 7.98031 16.4995 8.23462 16.4995 8.49979C16.4995 8.76495 16.3942 9.01926 16.2067 9.20679C16.0192 9.39426 15.7649 9.49957 15.4997 9.49957C15.2346 9.49957 14.9803 9.39426 14.7927 9.20679L8.49973 2.91379Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const ArrowUp = forwardRef(Component);

export default ArrowUp;
