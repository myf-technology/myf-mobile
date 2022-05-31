import { Image, ScrollView, View } from 'react-native';

import { IProps } from './types';

import Layout from '../../../../../constants/Layout';

export const Carousel = ({ refs, onScroll, carouselImages = [] }: IProps) => {
  const width = Layout.window.width;

  return (
    <ScrollView
      testID="onScroll"
      ref={refs}
      onScroll={onScroll}
      scrollEventThrottle={16}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      decelerationRate="fast"
      horizontal
    >
      {carouselImages?.map((source, index) => (
        <View
          testID="view"
          key={`${source}-${index}`}
          style={{
            width,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: '70%', height: '80%' }}
            {...{ source }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
