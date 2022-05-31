import { StyleSheet } from 'react-native';

import { height, width } from '../../../../constants/responsive';

export default StyleSheet.create({
  container: {
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchbar: {
    width: width(75),
    height: height(4),
    borderColor: 'black',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: width(100),
  },
});
