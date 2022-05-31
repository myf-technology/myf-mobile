import { Key } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { Indicator } from './_components/Indicator';

import { height, width } from '../../constants/responsive';

const WIDTH = width(80);
const SPACING = width(3);

export const Carousel = ({
  assets,
}: {
  assets: Array<ImageSourcePropType | undefined>;
}) => {
  const active = useSharedValue(0);
  const indicators: number[] = [];
  const newAssets = assets.map((image, index) => {
    indicators.push(index);

    return { image, end: false };
  });
  newAssets.push({ image: undefined, end: true });

  const onScroll = ({
    nativeEvent: {
      layoutMeasurement: { width },
      contentOffset: { x },
    },
  }: {
    nativeEvent: {
      layoutMeasurement: { width: number };
      contentOffset: { x: number };
    };
  }) => {
    const slideSize = width;
    const index = x / slideSize;
    const roundIndex = Math.round(index);

    active.value = withTiming(roundIndex, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
  };

  return (
    <>
      <ScrollView
        horizontal
        onScroll={onScroll}
        bounces={false}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH}
        decelerationRate="fast"
        contentContainerStyle={
          {
            // paddingHorizontal: (width(100) - WIDTH) / 2,
          }
        }
      >
        {newAssets.map(({ image, end }) => {
          if (end) {
            return <View key={'end'} style={{ width: width(20) }} />;
          }
          return (
            <View
              key={image as Key}
              style={{
                width: WIDTH,
                height: height(10),
              }}
            >
              <View
                style={{
                  // marginHorizontal: SPACING,
                  paddingHorizontal: SPACING,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={image as ImageSourcePropType}
                  style={{
                    width: width(75),
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Indicator {...{ active, indicators }} />
    </>
  );
};
