import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';


export default StyleSheet.create({
  bottomsheet: {
    backgroundColor: 'grey',
    height:height(100),
  },
  arrowDown: {
    position: 'absolute',
    marginLeft: width(80),
  },
  selectInput: {
    fontFamily: 'rubik',
    borderRadius: 8,
    height: height(7.2),
    justifyContent: 'center',
    padding: 10,
    marginTop: height(2),
    backgroundColor: Colors.white,
    shadowColor: Colors.grey3,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4,

    elevation: 10,
  },
})