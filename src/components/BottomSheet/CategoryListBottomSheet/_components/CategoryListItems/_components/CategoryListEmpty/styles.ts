import { StyleSheet } from 'react-native';
import { width } from '../../../../../../../constants';

export default StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
    height: width(100),
    alignItems: 'center',
  },
  text: {
    width: width(70),
    marginTop: width(10),
    textAlign: 'center',
  },
});
