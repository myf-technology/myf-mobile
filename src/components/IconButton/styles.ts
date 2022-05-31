import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { height, width } from '../../constants/responsive';

export default StyleSheet.create({
  masterView: {
    padding: 4,
    alignItems: 'center',
  },
  circle: {
    height: height(6),
    backgroundColor: Colors.grey4,
    justifyContent: 'center',
    alignItems: 'center',
    width: height(6),
    borderRadius: 100,
  },
  circleSmall: {
    height: height(5),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: height(5),
    borderRadius: 100,
  },
  square: {
    height: height(12),
    backgroundColor: Colors.grey4,
    alignItems: 'center',
    width: width(28),
    borderRadius: 12,
  },
});
