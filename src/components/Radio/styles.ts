import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { height, width } from '../../constants/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    backgroundColor: 'transparent',
    borderColor: Colors.dark,
    borderWidth: height(0.3),
    borderRadius: height(1.5),
    marginRight: width(1),
    height: height(3),
    width: height(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    height: height(1.5),
    width: height(1.5),
    borderRadius: height(3),
    backgroundColor: Colors.dark,
  },
});
