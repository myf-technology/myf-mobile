import { View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './styles';
import { Iprops } from './types';

import Colors from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';
import { Spacer } from '../../../Spacer';

export const Indicator = ({ active, indicators }: Iprops) => {
  const SIZE_BIG = width(2);
  const SIZE_SMALL = width(1.5);
  const activeColor = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        active.value,
        [0, 1],
        [Colors.dark, Colors.white2]
      ),
      height: interpolate(active.value, [0, 1], [SIZE_BIG, SIZE_SMALL]),
      width: interpolate(active.value, [0, 1], [SIZE_BIG, SIZE_SMALL]),
    }),
    []
  );

  const desactiveColor = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        active.value,
        [1, 0],
        [Colors.dark, Colors.white2]
      ),
      height: interpolate(active.value, [1, 0], [SIZE_BIG, SIZE_SMALL]),
      width: interpolate(active.value, [1, 0], [SIZE_BIG, SIZE_SMALL]),
    }),
    []
  );

  return (
    <View style={styles.indicator}>
      {indicators.map((indicator, index) => (
        <Animated.View
          key={indicator}
          style={[
            styles.innerCircle,
            index === active.value ? activeColor : desactiveColor,
          ]}
        />
      ))}
      <Spacer amount={3} />
    </View>
  );
};
