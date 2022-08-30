import { StyleSheet } from 'react-native';
import { paddingHorizontal } from '../../constants';

export default StyleSheet.create({
  container: { flex: 1, paddingHorizontal, backgroundColor: 'black' },
  createBalanceFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
