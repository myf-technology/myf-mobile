import { StyleSheet } from 'react-native';

import Layout from '../../../constants/Layout';
import { width } from '../../../constants/responsive';

export default StyleSheet.create({
  container: {
    marginLeft: Layout.paddingHorizontal,
    alignItems: 'center',
  },
  balance: {
    width: width(82),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eye: {
    marginRight: width(6),
  },
  moneyHidden: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
