import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { Carousel } from './components/Carousel';
import { IndexIndicator } from './components/IndexIndicator';
import carouselImages from './helpers/carouselImages';
import styles from './styles';

import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import { PUBLIC } from '../../../navigation/Public/constants';
import RegisterLayout from '../_helpers/RegisterLayout';

// [TODO]: improve animations
export const SelfieGuide = () => {
  const refs: any = useRef();
  const [index, setIndex] = useState(0);
  const colorIndex = useSharedValue(index);

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    setIndex(roundIndex);
    colorIndex.value = roundIndex;
  }, []);

  const { navigate } = useNavigation();

  const onPress = () => {
    colorIndex.value === 0
      ? refs?.current?.scrollTo({ x: width(100), y: 0, animated: true })
      : navigate(PUBLIC.SELFIE as never);
  };

  return (
    <RegisterLayout>
      <View style={styles.title}>
        <Text font="title2" textAlign="left">
          Sua selfie
        </Text>
      </View>

      <View style={styles.carousel}>
        <Carousel {...{ onScroll, carouselImages, refs }} />
      </View>

      <View style={styles.details}>
        <View style={styles.callout}>
          <Text font="callout">Tire uma foto sua bem iluminada</Text>
        </View>

        <View style={styles.indicator}>
          <IndexIndicator {...{ colorIndex }} />
        </View>

        <View style={styles.button}>
          <Button onPress={onPress} title="Continuar" theme="dark" />
        </View>
      </View>
    </RegisterLayout>
  );
};
