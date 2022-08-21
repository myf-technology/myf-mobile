import { StyleSheet } from 'react-native';
import { Colors, width } from '../../constants';

export default StyleSheet.create({
  container: { backgroundColor: 'black', width: '100%', height: '100%' },
  header: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
  },
  viewBorders: { width: '90%', height: '90%', alignSelf: 'center' },
  flow: {
    marginTop: width(30),
    marginRight: width(80),
    width: width(90),
  },
  inputMask: {
    fontSize: width(6),
  },
  bottomSheet: {
    backgroundColor: Colors.grey,
    width: width(35),
    borderRadius: width(16),
    height: width(8),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  arrow: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: width(42),
    top: width(25),
  },
  plusSign: {
    alignItems: 'center',
    marginTop: width(8),
    marginBottom: width(2),
  },
  titleBox: {
    backgroundColor: Colors.grey,
    borderRadius: width(16),
    height: width(8),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
