import { createRef, forwardRef, useImperativeHandle } from 'react';
import { Dimensions, View } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { bottomSheetRefProps, Iprops } from './types';

import { height } from '../../constants/responsive';

const { height: SCREEN_HEIGHT, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'orange',
    height: SCREEN_HEIGHT,
    width,
    position: 'absolute',
    top: SCREEN_HEIGHT,
  },
});

const { modal } = styles;

const SPRING_CONFIG = {
  mass: 0.5,
};

/**
 * @todos
 *  @first
 *    must handle inner gesture handlers.
 *  @second
 *    must have a way to receive a *smart header*
 */
export const BottomSheet = forwardRef<bottomSheetRefProps, Iprops>(
  ({ snapPoints, style, children }, ref) => {
    const snapPointHeight = snapPoints.map((point) => height(point));
    const scrollRef = createRef<ScrollView>();
    const context = useSharedValue(0);
    const y = useSharedValue(-snapPointHeight[0]);

    const shouldEnableNextGesture = useSharedValue(false);

    const differences: number[] = [];

    snapPointHeight.reduce((previous, current) => {
      const res = (current - previous) / 2;

      differences.push(res + previous);

      return current;
    });

    const gesture = Gesture.Pan()
      .simultaneousWithExternalGesture(scrollRef)
      .onStart(() => {
        context.value = y.value;
      })
      .onUpdate(({ translationY }) => {
        y.value = translationY + context.value;
        y.value = Math.max(
          y.value,
          -snapPointHeight[snapPointHeight.length - 1]
        );
      })
      .onEnd(() => {
        shouldEnableNextGesture.value =
          Math.abs(y.value) >= snapPointHeight[snapPointHeight.length - 1];
        console.log(shouldEnableNextGesture.value);

        const positiveDistances: number[] = [];
        const distances: number[] = [];

        snapPointHeight.forEach((point) => {
          const currentPoint = -point - y.value;

          currentPoint > 0 && positiveDistances.push(-point - y.value);

          distances.push(-point - y.value);
        });

        const minPositivePoint = positiveDistances.indexOf(
          Math.min(...positiveDistances)
        );

        const newMinNegativePoint = distances.find((e) =>
          e.toString().includes('-')
        );

        const tempNegativeIndex = distances.findIndex(
          (e) => e === newMinNegativePoint
        );

        if (!differences[minPositivePoint]) {
          y.value = withSpring(-snapPointHeight[0], SPRING_CONFIG);
          return;
        }

        if (minPositivePoint === -1) {
          y.value = withSpring(-snapPointHeight[0], SPRING_CONFIG);
          return;
        }

        if (Math.abs(y.value) > differences[minPositivePoint]) {
          y.value = withSpring(
            -snapPointHeight[minPositivePoint + 1],
            SPRING_CONFIG
          );
        } else {
          y.value = withSpring(
            -snapPointHeight[tempNegativeIndex - 1],
            SPRING_CONFIG
          );
        }
      });

    const wInterpolate = () => {
      'worklet';

      return interpolate(
        Math.abs(y.value),
        [SCREEN_HEIGHT - 200, SCREEN_HEIGHT - 50],
        [20, 0],
        Extrapolate.CLAMP
      );
    };

    const rModal = useAnimatedStyle(() => ({
      transform: [{ translateY: y.value }],
      borderRadius: wInterpolate(),
    }));

    useImperativeHandle(ref, () => ({ translationY: y.value }));

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector {...{ gesture }}>
          <Animated.View style={[modal, style, rModal]}>
            <View style={{ marginBottom: 100 }} />
            <ScrollView ref={scrollRef}>{children}</ScrollView>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    );
  }
);
