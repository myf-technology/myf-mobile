/**
 * Due to the landscape orientation change the code's value need to be inverted
 */

import Svg, { Mask, Rect } from 'react-native-svg';

import Colors from '../../../../../../constants/Colors';
import { height, width } from '../../../../../../constants/responsive';

const OVERLAY_HOLE_WIDTH = width(30);
const X = width(50) - OVERLAY_HOLE_WIDTH / 2;

export const Overlay = () => (
  <Svg style={{ position: 'absolute' }}>
    <Mask id="overlay">
      <Rect
        height={width(100)}
        opacity={0.8}
        width={height(100)}
        fill={'white'}
      />
      <Rect
        y={X}
        height={OVERLAY_HOLE_WIDTH}
        width={height(100)}
        fill={'black'}
      />
    </Mask>

    <Rect
      fill={Colors.dark}
      width={height(100)}
      height={height(100)}
      mask={'url(#overlay)'}
    />
  </Svg>
);
