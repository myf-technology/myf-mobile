import { StyleSheet } from 'react-native';

import { height, width } from '../../constants/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(90),
    height: 73,
    borderRadius: 10,
    paddingHorizontal: width(4),
  },
  touchable: {
    // marginBottom: height(1.5),
  },
  children: {
    marginLeft: width(3),
  },
  prefix: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
