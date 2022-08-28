import { StyleSheet } from 'react-native';
import { Colors, height, width } from '../../constants';

export default StyleSheet.create({
  baseButton: {
    borderRadius: height(1.6),
    padding: height(1),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#222',
  },
  default: {},
  titleContainer: {
    flexDirection: 'row',
  },
  textDisabled: {
    color: Colors.grey,
  },
  suffixIcon: {
    marginRight: width(3),
  },
  disabled: {
    // backgroundColor: '#AFAFAF',
  },
});
