import { StyleSheet } from 'react-native';

import { height, width } from '../../../constants/responsive';

export default StyleSheet.create({
  firstButton: {
    position: 'absolute',
    marginTop: width(14),
  },
  secondButton: {
    position: 'absolute',
    marginTop: width(26),
    height: height(8),
  },
});
