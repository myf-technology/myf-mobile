import { StyleSheet } from 'react-native';

import { width } from '../../../../../constants/responsive';

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
    elevation: 2,
    shadowColor: 'black',
    shadowRadius: width(1),
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
  },
});
