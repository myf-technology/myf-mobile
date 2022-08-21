import { StyleSheet } from 'react-native';
import { width } from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(80),
    alignSelf: 'center',
  },
  squaredInput: {
    width: width(15),
    height: width(15),
    borderRadius: width(2),
  },
});
