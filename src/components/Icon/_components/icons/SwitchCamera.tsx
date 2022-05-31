import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg ref={ref} width={40} height={40} fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill={Colors[fill]} fillOpacity={0.37} />
    <Path
      d="M30 20.22c-.052.372-.087.749-.157 1.114-.376 2.07-1.304 3.85-2.811 5.328-.238.232-.487.446-.765.695h1.97v1.386h-5.252v-5.258h1.374v3.432c2.32-1.218 4.365-4.14 4.238-7.606-.133-3.606-2.765-7.3-7.13-8l.208-1.357c.87.133 1.681.37 2.464.719 2.133.956 3.74 2.48 4.8 4.562a9.608 9.608 0 0 1 1.02 3.64c.006.065.024.122.035.186.006.389.006.771.006 1.16ZM15.617 15.797v-3.42c-1.995 1.003-4.198 3.675-4.25 7.206-.052 3.508 2.464 7.67 7.143 8.395-.07.446-.14.887-.215 1.373-3.542-.695-6.093-2.62-7.542-5.942-1.467-3.35-.95-8.33 2.98-11.484h-1.995v-1.38h5.253v5.252h-1.374Z"
      fill={Colors.white}
    />
  </Svg>
);

const SwitchCamera = forwardRef(Component);

export default SwitchCamera;
