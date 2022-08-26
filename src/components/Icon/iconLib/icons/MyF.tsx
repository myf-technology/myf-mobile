import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from '../../types';
import { IconFactory } from '../../_components/IconFactory';

export const MyF = ({ fill = 'white', ...props }: ISvgIconProps) => (
  <IconFactory
    svg={() => (
      <Svg width="77" height="85" viewBox="0 0 577 585" fill="none" {...props}>
        <Path
          d="M0 354V-2.00272e-05H18V354H0ZM36 354V-2.00272e-05H90V354H36ZM108 354V-2.00272e-05H144V354H108ZM52.2 406.2H64.8L99 474.6L133.8 406.2H145.8V545.4H130.8V440.4L100.8 496.8H94.8L66.6 441V545.4H52.2V406.2Z"
          fill="#828282"
        />
        <Path
          d="M198.047 354V-2.00272e-05H234.047V354H198.047ZM252.047 354V-2.00272e-05H288.047V354H252.047ZM306.047 354V-2.00272e-05H378.047V354H306.047ZM340.247 443.4C339.047 449.4 337.647 455.4 336.047 461.4C334.047 467.4 331.447 475.4 328.247 485.4L302.447 556.8C299.247 566.4 294.847 573.4 289.247 577.8C283.647 582.2 277.047 584.4 269.447 584.4C259.847 584.4 252.047 581.4 246.047 575.4L253.247 564.6L254.447 562.8L255.647 563.4C256.047 565 256.647 566.2 257.447 567C258.247 568.2 259.647 569.2 261.647 570C264.447 570.8 267.447 571.2 270.647 571.2C275.847 571.2 280.247 569.2 283.847 565.2C287.047 561.2 290.247 554.8 293.447 546L251.447 443.4H268.247L300.047 525L313.247 484.2C316.447 473.8 318.847 466 320.447 460.8C322.047 455.2 323.247 449.4 324.047 443.4H340.247Z"
          fill="#828282"
        />
        <Path
          d="M396.094 354V-2.00272e-05H414.094V354H396.094ZM468.094 354V-2.00272e-05H504.094V354H468.094ZM558.094 354V-2.00272e-05H576.094V354H558.094ZM456.694 406.2H536.494V420H472.294V463.8H524.494V477H472.294V545.4H456.694V406.2Z"
          fill="#FFD54F"
        />
      </Svg>
    )}
  />
);