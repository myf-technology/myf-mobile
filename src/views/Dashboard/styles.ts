import { StyleSheet } from 'react-native';
import { width } from '../../constants/responsive';

export default StyleSheet.create({
  container: { backgroundColor: 'black', width: '100%', height: '100%' },
  header: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between'
  },
  viewBorders: { width: '90%', height: '90%', alignSelf: 'center' },
  flow: {
    marginTop: width(30),
    marginRight: width(80),
    width: width(90)
  }
});
