import * as React from 'react';
import { Component as ComponentProp, forwardRef, LegacyRef } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import Colors from '../../../../constants/Colors';
import { iconProps } from '../types';

const Component = (
  { fill = 'dark', ...props }: iconProps,
  ref: LegacyRef<ComponentProp<SvgProps>>
) => (
  <Svg ref={ref} height="35" width="35" {...props}>
    <Path
      d="M10.822 3.791
      a2.867 2.867 0 0 0-2.393 3.273l3.005 19.33
      a2.867 2.867 0 1 0 5.666-.88l-3.005-19.33
      a2.867 2.867 0 0 0-3.273-2.393Z

      M20.282 5.787h-.001
      a2.866 2.866 0 0 0-2.39 3.274l1.921 12.329
      a2.866 2.866 0 0 0 5.665-.883l-1.922-12.33
      a2.866 2.866 0 0 0-3.273-2.39Z

      M29.154.71
      a2.867 2.867 0 0 0-2.393 3.272l3.004 19.33
      a2.867 2.867 0 1 0 5.666-.88l-3.004-19.33
      A2.867 2.867 0 0 0 29.154.708Z

      M39.164 5.3
      a2.867 2.867 0 0 0-2.393 3.272
      l1.046 6.727
      a2.867 2.867 0 1 0 5.666-.88
      l-1.046-6.727
      a2.867 2.867 0 0 0-3.273-2.393Z

      M2.833 13.085
      A2.867 2.867 0 0 0 .44 16.358
      l1.046 6.726
      a2.867 2.867 0 1 0 5.666-.88
      l-1.046-6.727
      a2.867 2.867 0 0 0-3.273-2.392Z"
      fill={Colors[fill]}
      {...props}
    />
  </Svg>
);

const ValepayLogo = forwardRef(Component);

export default ValepayLogo;
