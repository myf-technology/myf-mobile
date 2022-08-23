import { StyleSheet } from 'react-native';

import { Colors, height, TypographySizeMap } from '../../../../constants';

export const inputStyles = () => {
  // const isErrorState = textColor === 'red';

  return StyleSheet.create({
    input: {
      color: Colors.yellow,
      fontSize: TypographySizeMap.footnote,
      height: height(3),
      paddingVertical: 0,
    },
  }).input;
};

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
