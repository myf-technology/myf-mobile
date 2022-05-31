import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M0.000542638 6.95032H17.0006C17.0061 7.06212 17.0146 7.16084 17.0147 7.25951C17.0156 8.38266 17.0156 9.50583 17.0147 10.629C17.012 11.7303 16.3305 12.4178 15.2329 12.4183C10.7472 12.4204 6.26146 12.4204 1.77573 12.4183C0.680715 12.4176 0.0020964 11.726 0.000988809 10.6228C-0.000229536 9.49969 -0.000322106 8.37652 0.000711642 7.25333L0.000542638 6.95032ZM3.52987 10.9132C3.98209 10.9132 4.43443 10.9177 4.88666 10.9119C5.29093 10.9067 5.55963 10.6546 5.55991 10.2943C5.56018 9.93396 5.29132 9.67889 4.88744 9.67683C3.98291 9.67215 3.07838 9.67215 2.17385 9.67683C1.77052 9.67889 1.49889 9.9348 1.49889 10.2935C1.49889 10.6523 1.76986 10.9067 2.17307 10.9119C2.6253 10.9177 3.07758 10.9132 3.52987 10.9132Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.0175781 7.61179V1.39124H16.9889C17.0014 1.55012 17.0098 1.71049 17.014 1.87152C17.0157 3.60093 17.0087 5.33033 17.0195 7.05974C17.0223 7.52013 16.9595 7.65551 16.7531 7.65514C11.2461 7.64402 5.73923 7.64064 0.232349 7.64501C0.169634 7.64538 0.106697 7.62624 0.0175781 7.61179Z"
      fill={Colors[fill]}
    />
    <Path
      d="M17.004 1.57756H0.0383465C-0.0301577 0.913796 0.595351 0.170517 1.33489 0.0347679C1.47129 0.0112407 1.60952 6.12128e-05 1.74791 0.00136098C6.25169 -0.000309432 10.7555 -0.000443812 15.2592 0.000966761C16.152 0.0014122 16.808 0.520582 16.9815 1.34955C16.9946 1.4113 16.9944 1.47567 17.004 1.57756Z"
      fill={Colors[fill]}
    />
    <Rect x="1.01953" y="8.82471" width="6" height="3" fill={Colors[fill]} />
    <Rect x="1.01953" y="6.82471" width="10" height="1" rx="0.5" fill="white" />
    <Rect x="1.01953" y="3.82471" width="12" height="1" rx="0.5" fill="white" />
  </Svg>
);

const CardId = forwardRef(Component);

export default CardId;
