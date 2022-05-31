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
    width="24"
    height="17"
    viewBox="0 0 24 17"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      d="M0.427002 9.61481H23.381C23.3885 9.76577 23.4 9.89907 23.4001 10.0323C23.4014 11.5488 23.4014 13.0653 23.4001 14.5819C23.3965 16.0689 22.4763 16.9971 20.9943 16.9978C14.9375 17.0008 8.88072 17.0008 2.82393 16.9978C1.3454 16.997 0.4291 16.0631 0.427605 14.5736C0.42596 13.0571 0.425835 11.5405 0.42723 10.0239L0.427002 9.61481ZM5.19242 14.9656C5.80304 14.9656 6.4138 14.9717 7.02442 14.9638C7.57028 14.9569 7.93308 14.6164 7.93346 14.1299C7.93383 13.6434 7.5708 13.299 7.02547 13.2962C5.80414 13.2899 4.58281 13.2899 3.36148 13.2962C2.81689 13.299 2.45012 13.6446 2.45012 14.129C2.45012 14.6133 2.81599 14.9569 3.36043 14.9639C3.97105 14.9717 4.58174 14.9656 5.19242 14.9656Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.438965 7.8803V4.09436H23.365C23.3819 4.19106 23.3932 4.28866 23.3989 4.38667C23.4013 5.43922 23.3918 6.49176 23.4064 7.54431C23.4102 7.82451 23.3253 7.90691 23.0465 7.90668C15.6073 7.89992 8.16818 7.89786 0.729093 7.90052C0.644373 7.90074 0.559353 7.88909 0.438965 7.8803Z"
      fill={Colors[fill]}
    />
    <Path
      d="M23.3857 2.36037H0.478136C0.385639 1.46413 1.23022 0.460524 2.22877 0.277231C2.41295 0.245463 2.59959 0.230368 2.78645 0.232123C8.86761 0.229868 14.9488 0.229686 21.03 0.231591C22.2353 0.232192 23.1211 0.933195 23.3555 2.0525C23.373 2.13588 23.3728 2.22279 23.3857 2.36037Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const CreditCard = forwardRef(Component);

export default CreditCard;
