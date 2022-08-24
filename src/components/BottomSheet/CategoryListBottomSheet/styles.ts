import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants';

export default StyleSheet.create({
  handle: {
    backgroundColor: Colors.yellow2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  handleIndicator: {
    backgroundColor: Colors.yellow1,
  },
  itemsContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: Colors.black,
  },
});
