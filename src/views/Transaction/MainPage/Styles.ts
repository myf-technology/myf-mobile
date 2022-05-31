import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';

export default StyleSheet.create({
  icon: {
    backgroundColor: Colors.grey4,
    width: width(10),
    height: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
  },
  suffix: {
    position: 'absolute',
    marginLeft: width(85),
    marginTop: height(1),
  },
  price: {
    position: 'absolute',
    marginLeft: width(65),
  },
  category: {
    position: 'absolute',
    marginLeft: width(14),
  },
});
