import { View } from 'react-native';
import Svg, { Defs, Ellipse, Mask, Rect } from 'react-native-svg';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../../../../../constants/Colors';
import Layout from '../../../../../../constants/Layout';
import { height as getHeight } from '../../../../../../constants/responsive';

const { height, width } = Layout.window;

const cx = width / 2;
const cy = height / 2.2;
const rx = getHeight(18);
const ry = getHeight(25);

export const RoundedOverlay = ({ testID }: Iprops) => (
  <View testID={testID} style={styles.cameraOverlay}>
    <Svg style={styles.svgContainer} height={'100%'}>
      <Defs>
        <Mask id="mask">
          <Rect width={width} height={'100%'} fill="white" opacity={0.7} />
          <Ellipse {...{ cx, cy, rx, ry }} fill="black" />
        </Mask>
      </Defs>

      <Ellipse
        {...{ cx, cy, rx, ry }}
        stroke={Colors.grey3}
        strokeWidth={getHeight(0.5)}
      />

      <Rect height={'100% '} width={width} fill="#0E1B42" mask="url(#mask)" />
    </Svg>
  </View>
);
