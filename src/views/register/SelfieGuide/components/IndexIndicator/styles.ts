import { StyleSheet } from 'react-native';

import Colors from '../../../../../constants/Colors';
import { width } from '../../../../../constants/responsive';

export default (colorIndex: { value: number }) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width(8),
    },
    firstCircle: {
      borderRadius: width(1.5),
      height: width(3.2),
      width: width(3.2),
      backgroundColor: colorIndex.value === 0 ? Colors.dark : Colors.grey3,
    },
    secondCircle: {
      borderRadius: width(1.5),
      height: width(3.2),
      width: width(3.2),
      backgroundColor: colorIndex.value === 1 ? Colors.dark : Colors.grey3,
    },
  });
