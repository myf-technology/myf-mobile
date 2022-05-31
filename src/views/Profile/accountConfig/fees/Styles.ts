import { StyleSheet } from 'react-native';

import { width } from '../../../../constants/responsive';

export default StyleSheet.create({
  subtitle: {
    width: width(70),
  },
  descrition: {
    width: width(50),
  },
  tariffs: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: width(85),
  },
});
