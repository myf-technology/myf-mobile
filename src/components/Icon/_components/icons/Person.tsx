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
    width="15"
    height="17"
    viewBox="0 0 15 17"
    fill="none"
    {...props}
  >
    <Path
      d="M7.30584 8.36862C11.3404 8.36862 14.6117 11.1788 14.6117 14.6451V16.3188C14.6018 16.4386 14.5452 16.5497 14.454 16.628C14.3629 16.7064 14.2445 16.7456 14.1246 16.7373H0.483709C0.364366 16.7447 0.246872 16.705 0.15644 16.6268C0.0660079 16.5486 0.00984384 16.438 0 16.3188V14.6451C0 11.1788 3.27047 8.36862 7.30584 8.36862Z"
      fill={Colors[fill]}
    />
    <Path
      d="M7.11356 7.53177C6.36873 7.53177 5.64063 7.3109 5.02134 6.8971C4.40204 6.4833 3.91935 5.89514 3.63432 5.20702C3.34929 4.51889 3.27471 3.76169 3.42002 3.03118C3.56533 2.30067 3.92399 1.62965 4.45066 1.10298C4.97733 0.576307 5.64835 0.21764 6.37887 0.0723319C7.10938 -0.0729762 7.86658 0.00160119 8.5547 0.286633C9.24283 0.571665 9.83098 1.05435 10.2448 1.67365C10.6586 2.29295 10.8795 3.02105 10.8795 3.76587C10.8795 4.76465 10.4827 5.72252 9.77645 6.42876C9.07021 7.135 8.11233 7.53177 7.11356 7.53177V7.53177Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Person = forwardRef(Component);

export default Person;
