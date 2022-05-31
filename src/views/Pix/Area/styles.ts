import { StyleSheet } from 'react-native';

import { width } from '../../../constants/responsive';

export default StyleSheet.create({
  container: { flex: 1 },
  iconButtons: {
    flexDirection: 'row',
  },
  iconButtonWrapper: { marginRight: width(3) },
});
