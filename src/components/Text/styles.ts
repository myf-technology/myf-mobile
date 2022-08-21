import { StyleSheet, TextStyle } from 'react-native';
import { Colors, TypographySizeMap } from '../../constants';

let typographyStyles: { [x: string]: TextStyle } = {};

for (const size in TypographySizeMap) {
  typographyStyles = {
    [size]: {
      fontSize: Number(TypographySizeMap[size]),
    },
  };
}

export default StyleSheet.create({
  baseText: {
    // TODO: define font family
    // fontFamily: 'rubik-medium',
    color: Colors.black,
  },
  ...typographyStyles,
});
