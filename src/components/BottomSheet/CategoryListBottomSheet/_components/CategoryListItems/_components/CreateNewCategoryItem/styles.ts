import { StyleSheet } from 'react-native';
import { Colors, height } from '../../../../../../../constants';

export default StyleSheet.create({
  container: {
    height: height(4),
    backgroundColor: Colors.grey,
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 10,
    justifyContent: 'center',
  },
});
