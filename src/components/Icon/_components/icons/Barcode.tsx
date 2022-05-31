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
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      d="M8.21552 17.9962H3.36621V3.29799H8.21552V17.9962Z"
      fill={Colors[fill]}
    />
    <Path
      d="M13.2183 3.28267H18.0725V17.9856H13.2183V3.28267Z"
      fill={Colors[fill]}
    />
    <Path
      d="M9.93262 3.28294H11.5031V17.9856H9.93262V3.28294Z"
      fill={Colors[fill]}
    />
    <Path
      d="M19.7881 3.28329H21.3578V17.9851H19.7881V3.28329Z"
      fill={Colors[fill]}
    />
    <Path
      d="M23.0703 3.28371H24.6454V17.9878H23.0703V3.28371Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.0117188 0H4.93364V1.59814H1.64516V4.86979H0.0117188V0Z"
      fill={Colors[fill]}
    />
    <Path
      d="M28.0001 4.87642H26.3964C26.3891 4.73591 26.3761 4.60741 26.3758 4.47892C26.3739 3.64166 26.3633 2.8041 26.3808 1.96721C26.3869 1.67306 26.2843 1.59829 26.0039 1.60375C25.166 1.61993 24.3276 1.60951 23.4894 1.60951H23.0708V0.00779724H28.0001V4.87642Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0 21.2668V16.4197H1.62753V19.6565H4.92878V21.2668H0Z"
      fill={Colors[fill]}
    />
    <Path
      d="M27.9954 21.2798H23.0713V19.6806H26.3632V16.4097H27.9954V21.2798Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Barcode = forwardRef(Component);

export default Barcode;
