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
    {...props}
    ref={ref}
  >
    <Path d="M8.21552 17.9961H3.36621V3.29785H8.21552V17.9961Z" fill="black" />
    <Path d="M13.2183 3.28271H18.0725V17.9857H13.2183V3.28271Z" fill="black" />
    <Path d="M9.93262 3.28271H11.5031V17.9854H9.93262V3.28271Z" fill="black" />
    <Path d="M19.7881 3.2832H21.3578V17.985H19.7881V3.2832Z" fill="black" />
    <Path d="M23.0703 3.28369H24.6454V17.9878H23.0703V3.28369Z" fill="black" />
    <Path
      d="M0.0117188 0H4.93364V1.59814H1.64516V4.86979H0.0117188V0Z"
      fill="black"
    />
    <Path
      d="M28.0001 4.87644H26.3964C26.3891 4.73592 26.3761 4.60743 26.3758 4.47894C26.3739 3.64167 26.3633 2.80412 26.3808 1.96722C26.3869 1.67307 26.2843 1.5983 26.0039 1.60377C25.166 1.61995 24.3276 1.60952 23.4894 1.60952H23.0708V0.0078125H28.0001V4.87644Z"
      fill="black"
    />
    <Path
      d="M0 21.267V16.4199H1.62753V19.6567H4.92878V21.267H0Z"
      fill="black"
    />
    <Path
      d="M27.9954 21.2798H23.0713V19.6805H26.3632V16.4097H27.9954V21.2798Z"
      fill="black"
    />
  </Svg>
);

const Ticket = forwardRef(Component);

export default Ticket;
