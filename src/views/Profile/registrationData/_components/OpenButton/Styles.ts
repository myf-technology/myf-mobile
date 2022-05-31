import { StyleSheet } from 'react-native';

import Colors from '../../../../../constants/Colors';
import { height, width } from '../../../../../constants/responsive';

export default StyleSheet.create({
  dropDown: {
    backgroundColor: Colors.grey4,
    width: width(90),
    // height: width(90),
    // TODO: the animated give a strange answer.
    padding: width(5),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    alignItems: 'center',
    marginTop: width(3),
    marginLeft: width(2),
  },
});
