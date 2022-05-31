import { StyleSheet } from 'react-native';

import { height, width } from '../../../constants/responsive';

export default StyleSheet.create({
  margin: {
    width: width(90),
    alignSelf: 'center',
  },
  title: {
    width:width(80),
  },
  container: {
    height: height(4),
  },
  content: { width: width(30) },
  origin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});