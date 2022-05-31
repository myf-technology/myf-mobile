import { View } from 'react-native';
import Svg, { Defs, Mask, Rect } from 'react-native-svg';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../../../../../constants/Colors';
import Layout from '../../../../../../constants/Layout';
import {
  height as getHeight,
  width as getWidth,
} from '../../../../../../constants/responsive';

const { height, width } = Layout.window;

const INNER_RECT_HEIGHT = getHeight(60);
const INNER_RECT_WIDTH = getWidth(85);
const x = width / 2 - INNER_RECT_WIDTH / 2;
const y = height / 6;

export const SquaredOverlay = ({ testID }: Iprops) => (
  <View testID={testID} style={styles.cameraOverlay}>
    <Svg style={styles.svgContainer} height={'100%'}>
      <Defs>
        <Mask id="mask">
          <Rect width={width} height={'100%'} fill="white" opacity={0.7} />
          <Rect
            {...{ x, y }}
            width={INNER_RECT_WIDTH}
            height={INNER_RECT_HEIGHT}
            fill="black"
          />
        </Mask>
      </Defs>

      <Rect
        {...{ x, y }}
        width={INNER_RECT_WIDTH}
        height={INNER_RECT_HEIGHT}
        stroke={Colors.grey3}
        strokeWidth={2}
      />

      <Rect height={'100% '} width={width} fill="#0E1B42" mask="url(#mask)" />
    </Svg>
  </View>
);
