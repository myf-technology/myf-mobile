import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { ContainerButton } from './src/components/ContainerButton';
import { Icon } from './src/components/Icon';
import { width } from './src/constants/responsive';

const snapPoints = [-100, 0];

export const Example = () => {
  const horizontalTranslation = useSharedValue(0);
  const context = useSharedValue(0);
  const velocityX = useSharedValue(0);

  const qualquer = Gesture.Pan()
    .onStart(() => {
      context.value = horizontalTranslation.value;
    })
    .onUpdate((param) => {
      const { min } = Math;

      console.log(param.translationX);

      velocityX.value = param.velocityX;

      if (param.translationX < 0) {
        horizontalTranslation.value =
          context.value + min(param.translationX, 0);
      } else {
        horizontalTranslation.value = min(param.translationX, 0);
      }
    })
    .onEnd(() => {
      horizontalTranslation.value = snapPoint(
        horizontalTranslation.value,
        velocityX.value,
        snapPoints
      );
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(horizontalTranslation.value)
          // translateX: horizontalTranslation.value
        }
      ]
    };
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
        width: '100%',
      }}
    >
      <GestureDetector gesture={qualquer}>
        <Animated.View style={[styles.a, rStyle]}>
          <ContainerButton
            onPress={() => ''}
            activeOpacity={1}
            prefix='ArrowBack'
            suffix='Check'
          >
            <Text>asdjaosdjias</Text>
          </ContainerButton>
        </Animated.View>
      </GestureDetector>
      <View style={styles.deleteBtn}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name='Trash' fill='white' height={30} width={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {
    height: 60,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: -1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: -snapPoints[0] / 2 - 30 / 2,
    width: width(90),
    height: 73,
    borderRadius: 10
  },
  a: {
    // backgroundColor: 'white',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
