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
    width="25"
    height="25"
    viewBox="0 0 19 19"
    fill="none"
    {...props}
  >
    <Path
      d="M14.25 12.7338C13.6483 12.7338 13.106 12.9673 12.6944 13.3434L7.05375 10.054C7.09729 9.87589 7.125 9.68985 7.125 9.49985C7.125 9.30985 7.09729 9.12381 7.05375 8.94568L12.635 5.68797C13.0585 6.08381 13.6246 6.32922 14.25 6.32922C15.5602 6.32922 16.625 5.26443 16.625 3.95422C16.625 2.64402 15.5602 1.57922 14.25 1.57922C12.9398 1.57922 11.875 2.64402 11.875 3.95422C11.875 4.14422 11.9027 4.33027 11.9462 4.50839L6.365 7.7661C5.94146 7.37027 5.37542 7.12485 4.75 7.12485C3.43979 7.12485 2.375 8.18964 2.375 9.49985C2.375 10.8101 3.43979 11.8748 4.75 11.8748C5.37542 11.8748 5.94146 11.6294 6.365 11.2336L12.0056 14.523C11.966 14.6892 11.9423 14.8634 11.9423 15.0415C11.9423 16.3161 12.9754 17.3492 14.25 17.3492C15.5246 17.3492 16.5577 16.3161 16.5577 15.0415C16.5577 13.7669 15.5246 12.7338 14.25 12.7338Z"
      fill={Colors[fill]}
    />
  </Svg>
);
const Share = forwardRef(Component);

export default Share;
