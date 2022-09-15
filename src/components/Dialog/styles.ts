import { StyleSheet } from 'react-native';
import { height, width } from '../../constants';

export const styles = StyleSheet.create({
  dialogContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: height(5),
    padding: width(2),
    paddingLeft: width(5),
    borderRadius: 20,
  },
  dialogButtonContainer: {},
});
