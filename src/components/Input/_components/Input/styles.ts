import { StyleSheet } from 'react-native';

import { Colors, height, TypographySizeMap } from '../../../../constants';
import { IInputProps } from './types';

export const inputStyles = ({}: IInputProps) => {
  // const isErrorState = textColor === 'red';

  return StyleSheet.create({
    input: {
      color: Colors.white,
      fontSize: TypographySizeMap.footnote,
      // borderRadius: 8,
      // height: height(7.2),
      // padding: 10,
      // marginTop: height(2),
      // shadowColor: Colors.grey,
      // borderWidth: 2,
      // elevation: 10,
      // textAlign: placeholderAlign,
      // borderColor: isErrorState ? Colors.red : 'transparent',
      // fontSize: fontSize || TypographySizeMap.body,
      // backgroundColor:
      // Colors[backgroundColor as keyof typeof Colors] || Colors.white,
      // color: Colors[textColor as keyof typeof Colors],
      // shadowOffset: {
      // width: 0,
      // height: 4,
      // },
      // shadowOpacity: noShadow ? 0 : 0.14,
      // shadowRadius: 4,
    },
  }).input;
};

export const styles = StyleSheet.create({
  eyeWrapper: {
    elevation: 100,
    position: 'absolute',
    right: height(8),
    // left: height(1.2),
    bottom: height(6.5),
    zIndex: 500,
  },
});
