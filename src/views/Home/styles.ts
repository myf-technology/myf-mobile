import { StyleSheet } from 'react-native';

import Layout from '../../constants/Layout';
import { height, width } from '../../constants/responsive';

export default StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20
  },
  containerButton: {
    marginBottom: Layout.window.height * 0.048,
    flex: 1,
    justifyContent: 'flex-end'
  },
  logo: {
    alignItems: 'center',
    marginTop: height(15)
  },
  registerButton: {
    marginBottom: Layout.window.height * 0.02
  }
});
