import { StyleSheet } from 'react-native';
import { Colors, height } from '../../constants';

export default StyleSheet.create({
  baseButton: {
    width: '100%',
    height: height(7),
    borderRadius: height(1.6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  yellow: {
    backgroundColor: Colors.yellow,
  },
  green: {
    backgroundColor: 'transparent',
  },
  white: {
    backgroundColor: Colors.white,
  },
  red: {
    backgroundColor: 'transparent',
    // borderColor: Colors.white,
  },
  dark: {
    backgroundColor: Colors.black,
  },
  redFluid: {
    backgroundColor: 'transparent',
    // borderColor: Colors.white,
    borderWidth: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
    // borderColor: Colors.white,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: '#AFAFAF',
  },
  sizeSmall: {
    width: height(18),
  },
});
