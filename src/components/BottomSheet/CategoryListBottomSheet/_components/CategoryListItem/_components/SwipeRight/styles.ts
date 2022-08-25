import { StyleSheet } from 'react-native';
import { Colors, width } from '../../../../../../../constants';

export default StyleSheet.create({
  container: { flexDirection: 'row' },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.black,
    backgroundColor: Colors.grey,
    borderWidth: 1,
    width: width(10),
  },
});
