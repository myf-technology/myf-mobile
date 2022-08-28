import { StyleSheet } from 'react-native';
import { width } from '../../../../../constants';

export default StyleSheet.create({
  view: {
    width: width(100),
    height: width(100),
    backgroundColor: 'grey',
    marginTop: width(100),
  },
  titleContainer: {
    alignSelf: 'center',
  },
  modalView: {
    height: width(200),
    width: width(90),
    alignSelf: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'white',
    width: width(90),
    height: width(10),
    borderRadius: width(3),
    paddingLeft: width(3),
  },
});
