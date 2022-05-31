import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { width } from '../../../constants/responsive';

export default StyleSheet.create({
  head: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  order: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width(72),
  },
  selectorOn: {
    backgroundColor: Colors.green,
    width: width(3),
    height: width(3),
    borderRadius: width(5) / 2,
  },
  selectorOff: {
    backgroundColor: Colors.grey4,
    width: width(4),
    height: width(4),
    borderRadius: width(5) / 2,
  },
  priceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width(85),
    alignSelf: 'center',
  },
});
