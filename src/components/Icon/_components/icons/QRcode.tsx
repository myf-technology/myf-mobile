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
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <Path
      d="M0 7.30435V0H7.30435V7.30435H0ZM1.73797 1.72394V5.57692H5.57828V1.72394H1.73797Z"
      fill={Colors[fill]}
    />
    <Path
      d="M13.6958 0H21.0001V7.30435H13.6958V0ZM15.421 5.56918H19.271V1.73626H15.421V5.56918Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0 13.6956H7.30435V20.9999H0V13.6956ZM5.57846 15.4336H1.73019V19.2697H5.57846V15.4336Z"
      fill={Colors[fill]}
    />
    <Path
      d="M14.6178 11.9389V10.0563H16.2245V8.21729H19.3121V9.9877H21.0002V13.6955H16.2913V11.9296H14.6089L14.6178 11.9389ZM19.3146 10.0795H16.3056V11.8364H19.3146V10.0795Z"
      fill={Colors[fill]}
    />
    <Path
      d="M9.82912 14.8571V13.2839H8.22253C8.22253 12.18 8.22254 11.1121 8.22313 10.0435C8.22371 10.0428 8.21729 10.051 8.21729 10.051H9.81402V13.2125H11.4085V14.799H14.6032C14.6032 15.354 14.6033 15.8821 14.6027 16.4108C14.6021 16.4115 14.6086 16.4033 14.6086 16.4033C14.4961 16.4137 14.3836 16.4329 14.2711 16.4332C13.3316 16.4356 12.3921 16.4345 11.4227 16.4345V14.8493H9.8217L9.82912 14.8571Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.0435 17.3567H13.1272V19.1707H14.6087V20.9986H13.0964V19.1998H11.6035V21.0001H10.05C10.05 19.7864 10.05 18.569 10.05 17.3479L10.0435 17.3567Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.9412 8.20161L8.21729 8.20843L8.22467 8.21736V6.37585H9.56462C9.56462 5.75422 9.56463 5.16337 9.56509 4.5718L9.56006 4.58019L10.9564 4.57482L10.9502 4.56519C10.9481 5.65016 10.9458 6.73515 10.9433 7.82016C10.943 7.95046 10.9372 8.08076 10.9342 8.2108L10.9412 8.20161Z"
      fill={Colors[fill]}
    />
    <Path
      d="M16.4346 17.3642L20.0867 17.3572L20.0757 17.3479V19.2608H18.4846V21.0001H16.4454C16.4454 19.7825 16.4454 18.5674 16.4454 17.3548L16.4346 17.3642Z"
      fill={Colors[fill]}
    />
    <Path
      d="M8.2083 8.2356C8.19818 8.83795 8.18789 9.44052 8.17741 10.0433C8.17692 10.0439 8.18428 10.0349 8.18349 10.0356C7.6106 10.0279 7.03838 10.0136 6.4661 10.0125C5.83256 10.0112 5.19896 10.022 4.56543 10.0276L4.57521 10.0364V8.24272C4.63247 8.2306 4.69052 8.22246 4.74894 8.21839C5.84571 8.21692 6.94262 8.21692 8.03966 8.21839C8.09955 8.22251 8.15904 8.23113 8.2176 8.24415L8.2083 8.2356Z"
      fill={Colors[fill]}
    />
    <Path
      d="M13.6957 10.9493H10.9709C10.9709 10.0169 10.9709 9.11695 10.9709 8.21729C10.9709 8.21729 10.957 8.22413 10.9565 8.22436C11.8452 8.22436 12.7342 8.22436 13.6813 8.22436C13.6813 9.13234 13.6813 10.043 13.6813 10.9564L13.6957 10.9493Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.908893 10.0435V13.6956H0V10.0532H0.913043L0.908893 10.0435Z"
      fill={Colors[fill]}
    />
    <Path
      d="M5.06495 10.0435V11.8637H6.39147V13.6956H5.02449V11.8803H3.65698C3.65698 11.2511 3.65699 10.6518 3.6575 10.0518C3.65801 10.051 3.65234 10.0603 3.65234 10.0603C4.12549 10.0574 4.59874 10.0546 5.07207 10.0521L5.06495 10.0435Z"
      fill={Colors[fill]}
    />
    <Path
      d="M20.0916 17.3478V14.6086H21V17.3418C20.6909 17.3418 20.389 17.3418 20.0869 17.3415L20.0916 17.3478Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.0348 2.73901C10.0293 3.34761 10.0236 3.9563 10.0177 4.5651L10.0238 4.56111C9.42671 4.56148 8.83019 4.56149 8.21729 4.56149V2.74333H10.0434L10.0348 2.73901Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.0349 14.6086C10.0325 15.5216 10.03 16.4347 10.0275 17.3478L10.0354 17.341C9.43599 17.341 8.83676 17.341 8.21729 17.341V14.6151H10.0434L10.0349 14.6086Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.0478 2.73913V0H10.9565V2.72639H10.0435L10.0478 2.73913Z"
      fill={Colors[fill]}
    />
    <Path
      d="M10.9698 4.56514V3.6521H13.6957V4.55988C12.7718 4.55988 11.8638 4.55989 10.9565 4.56013C10.9572 4.56034 10.9698 4.56514 10.9698 4.56514Z"
      fill={Colors[fill]}
    />
    <Path
      d="M0.926867 10.0386V8.21729H3.64359C3.64359 8.82616 3.64336 9.43483 3.64286 10.0433C3.64203 10.0439 3.65333 10.0348 3.65213 10.0356C2.73838 10.0336 1.82536 10.0313 0.913086 10.0286C0.914289 10.0291 0.926867 10.0386 0.926867 10.0386Z"
      fill={Colors[fill]}
    />
    <Path
      d="M14.6041 10.9667V13.6957H13.7005C13.7005 12.774 13.7005 11.8651 13.7005 10.9565C13.7005 10.9565 13.6959 10.9705 13.6958 10.971C13.9999 10.974 14.3043 10.9769 14.6088 10.9798L14.6041 10.9667Z"
      fill={Colors[fill]}
    />
    <Path
      d="M16.4387 16.4347V14.6086H17.3476V16.4248H16.4346L16.4387 16.4347Z"
      fill={Colors[fill]}
    />
    <Path
      d="M16.4051 16.4367C16.4118 16.7404 16.4185 17.0441 16.4253 17.3479L16.435 17.3432C15.8339 17.3432 15.2325 17.3432 14.6146 17.3432C14.6146 17.0374 14.6146 16.7363 14.6151 16.4348C14.6155 16.4346 14.6081 16.4391 14.609 16.4387C15.2112 16.4397 15.8128 16.4408 16.4139 16.442C16.4134 16.4415 16.4051 16.4367 16.4051 16.4367Z"
      fill={Colors[fill]}
    />
    <Path
      d="M4.56534 2.73901V4.5651H2.73926V2.73901H4.56534Z"
      fill={Colors[fill]}
    />
    <Path
      d="M16.4346 2.73901H18.2607V4.5651H16.4346V2.73901Z"
      fill={Colors[fill]}
    />
    <Path
      d="M2.73926 18.2609V17.3479H4.56534V18.2609H2.73926Z"
      fill={Colors[fill]}
    />
  </Svg>
);

const QRcode = forwardRef(Component);

export default QRcode;
