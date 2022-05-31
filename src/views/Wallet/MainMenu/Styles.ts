import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';

export default StyleSheet.create({
  container: {
    height: height(100),
    backgroundColor: Colors.dark,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerButtons: {
    alignItems: 'center',
  },
  text: {
    marginLeft: width(5),
  },
  buttonsValueText: { marginLeft: width(35) },
  buttonsBrandText: { marginLeft: width(3) },
  buttonsBox: {
    flexDirection: 'row',
    width: width(90),
    alignSelf: 'center',
    alignItems: 'center',
  },
  sheetModal: {
    height: height(100),
  },
  functionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height(2),
  },
  functionContainerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height(2),
    marginTop: height(3),
  },
  slidel:{
            width: width(70),
            height: width(12),
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: width(20),
            borderRadius: width(2),
          }
});
