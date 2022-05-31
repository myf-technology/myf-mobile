import { useEffect } from 'react';
import { Dimensions, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { height } from '../../constants/responsive';

export const Test = ({
  snapPoints = [10, 30, 50, 100],
  snapPointIndex = 0,
}) => {
  const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  };

  const snapPointDifferences: Array<number> = [];
  const snapPointThreshold = snapPoints.map(
    (number) => Dimensions.get('window').height - height(number)
  );

  // snapPointThreshold.reduce((x, y) => {
  //   const difference = (x + y) / 2;
  //   snapPointDifferences.push(difference);

  //   return y;
  // });

  snapPointThreshold.reduce((anterior, atual, index) => {
    const res = (anterior - atual) / 2;

    if (index === 1) {
      snapPointDifferences.push(res);
      return atual;
    }

    snapPointDifferences.push(res + anterior);

    return atual;
  });

  snapPointDifferences.push(snapPointDifferences.shift() as number);

  const top = useSharedValue(snapPointThreshold[snapPointIndex]);
  const style = useAnimatedStyle(() => ({
    top: withSpring(top.value, SPRING_CONFIG),
  }));

  useEffect(() => {
    top.value = snapPointThreshold[snapPointIndex];
  }, [snapPointIndex, snapPointThreshold, top]);

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, ctx: { y: number }) {
      ctx.y = top.value;
    },
    onActive({ translationY }, ctx) {
      if (top.value < snapPointThreshold[snapPointThreshold.length - 1]) {
        return;
      }

      top.value = ctx.y + translationY;
    },
    onEnd() {
      const asd = top.value < snapPointThreshold[1];

      if (top.value > snapPointDifferences[0] && !asd) {
        top.value = snapPointThreshold[0];
      }

      const indexInverted = snapPointDifferences
        .map((_, index) => index + 1)
        .reverse();

      let stop = false;

      // if (top.value < snapPointThreshold[snapPointThreshold.length - 1]) {
      //   top.value = snapPointThreshold[snapPointThreshold.length - 1];
      //   return;
      // }

      snapPointDifferences.reverse().forEach((value, index) => {
        if (!stop) {
          // if (top.value < snapPointThreshold[index]) {
          //   top.value = snapPointThreshold[indexInverted[index + 1]];
          // }

          if (top.value < value) {
            top.value = snapPointThreshold[indexInverted[index]];
            stop = true;
          }
        }
      });

      // if (top.value < snapPointDifferences[1]) {
      //   top.value = snapPointThreshold[2];
      //   return;
      // }

      // if (top.value < snapPointDifferences[0]) {
      //   top.value = snapPointThreshold[1];
      // }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: 0.3,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
      >
        <Text>Text</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};
