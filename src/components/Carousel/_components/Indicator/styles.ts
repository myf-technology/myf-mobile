import { StyleSheet } from 'react-native';

import { width } from '../../../../constants/responsive';

export default StyleSheet.create({
  indicator: {
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerCircle: {
    height: width(2),
    width: width(2),
    borderRadius: width(3),
    marginHorizontal: width(1.2),
  },
});
