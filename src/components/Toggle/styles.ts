import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { height, width } from '../../constants/responsive';

const styles = StyleSheet.create({
  switch: {
    backgroundColor: Colors.white,
    width: width(5),
    height: width(5),
    borderRadius: height(2.5),
    elevation: 8,
    shadowColor: Colors.dark,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 6
  },
  toggle: {
    width: width(11),
    height: height(3.3),
    justifyContent: 'center',
    borderRadius: width(5.1),
    marginLeft: 'auto'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '13%'
  }
});

export default styles;
