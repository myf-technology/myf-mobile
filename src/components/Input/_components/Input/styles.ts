import { StyleSheet } from 'react-native';

import { Colors, TypographySizeMap } from '../../../../constants';

export const inputStyles = () => {
  // const isErrorState = textColor === 'red';

  return StyleSheet.create({
    input: {
      color: Colors.white,
      fontSize: TypographySizeMap.footnote,
      flex: 1,
    },
  }).input;
};

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
