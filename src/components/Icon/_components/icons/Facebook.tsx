import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'grey4', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M1.10085 11.6325H3.43051V21.2234C3.43051 21.4127 3.58395 21.5661 3.7733 21.5661H7.72334C7.9127 21.5661 8.06613 21.4127 8.06613 21.2234V11.6777H10.7443C10.9184 11.6777 11.0649 11.547 11.0848 11.374L11.4916 7.84317C11.5027 7.74602 11.472 7.64874 11.407 7.57586C11.3419 7.50291 11.2488 7.46116 11.1511 7.46116H8.06627V5.24784C8.06627 4.58063 8.42551 4.2423 9.13413 4.2423C9.23511 4.2423 11.1511 4.2423 11.1511 4.2423C11.3405 4.2423 11.4939 4.0888 11.4939 3.89951V0.658498C11.4939 0.469141 11.3405 0.315708 11.1511 0.315708H8.37142C8.35181 0.314748 8.30828 0.313171 8.24411 0.313171C7.7618 0.313171 6.08535 0.40785 4.76109 1.62612C3.29381 2.97617 3.49777 4.59263 3.54651 4.87289V7.46109H1.10085C0.911489 7.46109 0.758057 7.61453 0.758057 7.80388V11.2896C0.758057 11.479 0.911489 11.6325 1.10085 11.6325Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Facebook = forwardRef(Component);

export default Facebook;
