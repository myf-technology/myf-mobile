import { StyleSheet } from 'react-native';
import { Layout } from '../../components';
import { height, width } from '../../constants';

export default StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerButton: {
    marginBottom: width(30),
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    alignItems: 'center',
    marginTop: height(15),
  },
  registerButton: {
    marginBottom: width(30),
  },
});
