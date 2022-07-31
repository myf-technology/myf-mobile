import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { FontSize } from '../../constants/Typography';
import { height } from '../../constants/responsive';

export default StyleSheet.create({
  input: {
    fontFamily: 'rubik',
    fontSize: FontSize.body,
    borderRadius: 8,
    height: height(7.2),
    padding: 10,
    marginTop: height(2),
    backgroundColor: Colors.white,
    shadowColor: Colors.grey3,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.14,
    shadowRadius: 4,

    elevation: 10
  },
  eyeWrapper: {
    elevation: 100,
    position: 'absolute',
    right: height(8),
    // left: height(1.2),
    bottom: height(6.5),
    zIndex: 500
  }
});
