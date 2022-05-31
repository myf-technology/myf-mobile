import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
  AnimatableValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import months, { monthsLang } from './_helpers/months';
import { TopBarProps } from './types';

import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { height, width } from '../../../../constants/responsive';

export const TopBar = ({ getCurrentIndex }: TopBarProps) => {
  const { width: SCREEN_WIDTH } = Layout.window;
  const MONTH_WIDTH = 90;
  const BAR_PADDING = 30;
  const [measurements, setMeasurements] = useState<number[]>([]);
  const currentIndex = useSharedValue(1);
  const blackBarWidth = useDerivedValue(() =>
    measurements[currentIndex.value]
      ? measurements[currentIndex.value] + BAR_PADDING
      : MONTH_WIDTH
  );
  const springAnimation = (value: AnimatableValue) => {
    'worklet';
    return withSpring(value, { stiffness: 100, damping: 20 });
  };

  const rTextContainer = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: springAnimation(
          SCREEN_WIDTH / 2 - (MONTH_WIDTH / 2) * (currentIndex.value * 2 + 1)
        ),
      },
    ],
  }));

  const rBlackBarStyle = useAnimatedStyle(() => ({
    width: springAnimation(blackBarWidth.value),
  }));

  const rText = (index: number) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAnimatedStyle(() => ({
      textAlign: 'center',
      color: currentIndex.value === index ? Colors.dark : Colors.white,
    }));

  return (
    <View>
      <Animated.View style={[styles.darkCenterText, rBlackBarStyle]} />

      <Animated.View style={[styles.months, rTextContainer]}>
        {months.map((month, index: number) => (
          <TouchableWithoutFeedback
            key={month}
            style={{ width: MONTH_WIDTH, alignItems: 'center' }}
            onPress={() => {
              // todo: pass month in english
              getCurrentIndex(index, monthsLang[index]);
              currentIndex.value = index;
            }}
          >
            <Text
              style={[rText(index)]}
              onMeasurement={({ width }) => {
                measurements[index] = width;
                setMeasurements([...measurements]);
              }}
            >
              {month}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  darkCenterText: {
    backgroundColor: Colors.white,
    height: height(3),
    width: width(23),
    borderRadius: width(2.5),
    top: -3,

    position: 'absolute',
    alignSelf: 'center',
    zIndex: -1,
    // test on android
  },
  months: {
    flexDirection: 'row',
  },
});
