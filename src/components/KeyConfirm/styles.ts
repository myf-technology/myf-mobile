import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

import { width } from '../../constants/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(80),
    alignSelf: 'center'
  },
  squaredInput: {
    width: width(15),
    height: width(15),
    borderRadius: width(2)
  }
});
