import { StyleSheet, TextStyle } from 'react-native';
import { Colors, TypographySizeMap } from '../../constants';

let typographyStyles: { [x: string]: TextStyle } = {};

for (const size in TypographySizeMap) {
  const fontSize = Number(
    TypographySizeMap[size as keyof typeof TypographySizeMap],
  );

  typographyStyles = {
    ...typographyStyles,
    [size]: {
      fontSize: Number.isNaN(fontSize) ? 0 : fontSize,
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
