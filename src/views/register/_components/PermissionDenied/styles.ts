import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/Colors';
import { height, width } from '../../../../constants/responsive';

export default StyleSheet.create({
  layout: {
    backgroundColor: Colors.white2,
  },
  card: {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: Colors.white,
    marginHorizontal: width(3),
    borderRadius: height(0.5),
    padding: width(4),
    elevation: 3,
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
