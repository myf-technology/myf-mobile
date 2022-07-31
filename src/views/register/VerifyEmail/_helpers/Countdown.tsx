import { useEffect, useState } from 'react';
import Animated, {
  Easing,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';

interface CountdownProps {
  /**
   * @param {number} seconds - The number of seconds to count down from.
   */
  from: number;
  /**
   * @param {() => void} onComplete - Called when the countdown is complete.
   */
  onComplete?: () => void;
  /**
   * @param {boolean} restart - Whether or not to restart the countdown.
   * @default false
   */
  restart?: boolean;
}

export const Countdown = ({ from, onComplete, restart }: CountdownProps) => {
  const time = useSharedValue(from);
  const [timer, setTimer] = useState(from);

  const animation = () => {
    console.log(timer);
    time.value = withTiming(time.value - from, {
      duration: from * 1000,
      easing: Easing.linear,
    });
  };

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    timer === 0 && onComplete && onComplete();
  }, [timer]);

  useEffect(() => {
    if (restart) {
      time.value = from;
      animation();
    }
  }, [restart]);

  useDerivedValue(() => {
    const { floor } = Math;
    runOnJS(setTimer)(floor(time.value > 0 ? time.value : 0));
  });

  return (
    <Text
      font='footnote'
      style={{ fontSize: 200, opacity: 0.4 }}
      color={Colors.yellow4}
    >
      {Math.floor(timer)}
    </Text>
  );
};
