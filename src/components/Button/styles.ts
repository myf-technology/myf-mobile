import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { height } from '../../constants/responsive';

export default StyleSheet.create({
  baseButton: {
    width: '100%',
    height: height(7),
    borderRadius: height(1.6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  yellow: {
    backgroundColor: Colors.yellow3
  },
  green: {
    backgroundColor: Colors.green
  },
  white: {
    backgroundColor: Colors.white
  },
  red: {
    backgroundColor: Colors.red
  },
  dark: {
    backgroundColor: Colors.dark
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: Colors.white,
    borderWidth: 1
  },
  disabled: {
    backgroundColor: '#AFAFAF'
  },
  sizeSmall: {
    width: height(18)
  }
});
