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
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    {...props}
    ref={ref}
  >
    <Path
      d="M13.6441 0.277588C6.61906 0.277588 0.921631 5.97502 0.921631 13C0.921631 20.025 6.61906 25.7224 13.6441 25.7224C20.669 25.7224 26.3665 20.025 26.3665 13C26.3665 5.97502 20.669 0.277588 13.6441 0.277588ZM14.6674 23.4545C14.6121 23.4545 14.5567 23.4545 14.4738 23.4822V17.4805C15.912 17.4529 17.2119 17.4252 18.4011 17.3422C17.3501 20.5781 15.3865 22.7354 14.6674 23.4545ZM12.6207 23.4545C11.874 22.7078 9.93795 20.5505 8.88697 17.3422C10.0486 17.4252 11.3761 17.4805 12.8143 17.4805V23.4822C12.759 23.4822 12.7037 23.4545 12.6207 23.4545ZM3.13423 13C3.13423 12.3086 3.2172 11.6171 3.32783 10.9534C3.93629 10.8427 5.0979 10.6768 6.72969 10.5108C6.5914 11.3129 6.50843 12.1426 6.50843 13.0277C6.50843 13.9127 6.5914 14.7424 6.70203 15.5168C5.0979 15.3509 3.90863 15.1849 3.30017 15.0743C3.2172 14.3829 3.13423 13.6914 3.13423 13ZM8.19554 13C8.19554 12.0597 8.30617 11.1746 8.47211 10.3449C9.74435 10.2619 11.1825 10.1789 12.8143 10.1789V15.8211C11.2102 15.7934 9.74435 15.7381 8.44445 15.6275C8.30617 14.8254 8.19554 13.9404 8.19554 13ZM14.6397 2.5455C15.3865 3.29225 17.2948 5.50484 18.3735 8.65779C17.2119 8.57482 15.912 8.5195 14.4738 8.5195V2.51784C14.5291 2.51784 14.5844 2.5455 14.6397 2.5455ZM12.8143 2.51784V8.5195C11.3761 8.54716 10.0762 8.57482 8.91463 8.65779C9.96561 5.50484 11.9016 3.29225 12.6207 2.5455C12.7037 2.5455 12.759 2.51784 12.8143 2.51784ZM14.4738 15.8211V10.1789C16.0779 10.2066 17.5437 10.2619 18.816 10.3449C18.9819 11.1746 19.0926 12.0597 19.0926 13C19.0926 13.9404 19.0096 14.8254 18.8436 15.6551C17.5714 15.7381 16.1056 15.7934 14.4738 15.8211ZM20.5308 10.5108C22.1625 10.6768 23.3242 10.8427 23.9326 10.9534C24.0709 11.6171 24.1539 12.3086 24.1539 13C24.1539 13.6914 24.0709 14.3829 23.9603 15.0467C23.3518 15.1573 22.1902 15.3232 20.5584 15.4892C20.6967 14.6871 20.752 13.8574 20.752 12.9724C20.752 12.1426 20.669 11.2852 20.5308 10.5108ZM23.4348 9.18328C22.6604 9.07265 21.5541 8.93436 20.1435 8.79608C19.4798 6.41754 18.3182 4.50918 17.3501 3.15396C20.1435 4.20494 22.3561 6.41754 23.4348 9.18328ZM9.93795 3.15396C8.94229 4.48152 7.80833 6.38988 7.14455 8.76842C5.76168 8.87905 4.65538 9.04499 3.85332 9.15562C4.93196 6.41754 7.17221 4.20494 9.93795 3.15396ZM3.85332 16.8167C4.62773 16.9274 5.73402 17.0657 7.1169 17.2039C7.78067 19.5825 8.88697 21.4908 9.88264 22.8184C7.1169 21.7398 4.93196 19.5548 3.85332 16.8167ZM17.4055 22.8184C18.4011 21.4908 19.5074 19.6101 20.1712 17.2316C21.5541 17.121 22.6604 16.955 23.4348 16.8444C22.3561 19.5548 20.1712 21.7398 17.4055 22.8184Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const Web = forwardRef(Component);

export default Web;
