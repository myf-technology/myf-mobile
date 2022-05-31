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
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M0.0453117 4.28211C0.0453117 4.06788 0.0416065 3.85353 0.0461014 3.63936C0.0554556 3.18998 0.294415 2.89195 0.741415 2.83368C1.68261 2.71161 2.60783 2.53019 3.5096 2.22694C4.87633 1.76121 6.17377 1.11329 7.36671 0.300754C7.44027 0.251153 7.51188 0.198642 7.58538 0.149162C7.87913 -0.0473011 8.04878 -0.0526978 8.33797 0.15086C9.20931 0.76387 10.1388 1.29005 11.1131 1.72184C12.3573 2.27436 13.6498 2.65771 15.0086 2.80178C15.6367 2.86848 15.8798 3.14208 15.8789 3.77258C15.8757 6.04901 15.585 8.28178 14.8182 10.4352C14.0947 12.4669 12.9898 14.2387 11.226 15.544C10.307 16.2214 9.2646 16.7137 8.15702 16.9932C7.99113 17.0261 7.81961 17.0169 7.65821 16.9664C5.15376 16.2664 3.30879 14.7338 2.03692 12.4905C1.09111 10.8223 0.562286 9.01391 0.298059 7.12725C0.166128 6.18514 0.0976122 5.23417 0 4.28726L0.0453117 4.28211Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Shield = forwardRef(Component);

export default Shield;
