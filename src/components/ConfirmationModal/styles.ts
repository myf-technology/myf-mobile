import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  switch: {
    backgroundColor: Colors.white,
    width: 21,
    height: 21,
    borderRadius: 11,
    elevation: 8,
  },
  toggle: {
    width: 40.4,
    height: 25.9,
    justifyContent: 'center',
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
});

export default styles;
