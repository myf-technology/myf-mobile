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
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M9.36099 0C4.18904 0 0 4.18904 0 9.36099C0 14.5329 4.18904 18.722 9.36099 18.722C14.5329 18.722 18.722 14.5329 18.722 9.36099C18.722 4.18904 14.5329 0 9.36099 0ZM10.2971 15.9137H8.42489V14.0415H10.2971V15.9137ZM12.2301 8.6636L11.3923 9.52481C10.7183 10.1988 10.2971 10.7651 10.2971 12.1693H8.42489V11.7012C8.42489 10.6668 8.84614 9.73075 9.52013 9.05208L10.6856 7.87259C11.0226 7.5356 11.2332 7.06755 11.2332 6.55269C11.2332 5.5183 10.3954 4.6805 9.36099 4.6805C8.3266 4.6805 7.48879 5.5183 7.48879 6.55269H5.61659C5.61659 4.48391 7.29221 2.8083 9.36099 2.8083C11.4298 2.8083 13.1054 4.48391 13.1054 6.55269C13.1054 7.37646 12.7731 8.12066 12.2301 8.6636Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const InterrogationSign = forwardRef(Component);

export default InterrogationSign;
