import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { height, width } from '../../constants/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    padding: Layout.paddingHorizontal,
  },
  logo: { marginBottom: 'auto', marginTop: height(3) },
  button: {
    backgroundColor: Colors.white,
    width: width(90),
    height: height(6),
    borderRadius: height(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(10),
  },
  storybookSVG: {
    position: 'absolute',
    right: 0,
  },
});
