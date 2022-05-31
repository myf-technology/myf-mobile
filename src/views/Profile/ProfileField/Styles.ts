import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';

export default StyleSheet.create({
  initialContainer: {
    backgroundColor: Colors.grey4,
    width: 64,
    height: 64,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundView: {
    backgroundColor: Colors.grey3,
    height: height(100),
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width(100),
  },
  title: {
    marginRight: width(4),
  },
  icon: {
    position: 'absolute',
    marginLeft: width(75),
    marginTop: height(4.5),
  },
  options: {
    flexDirection: 'row',
    marginRight: width(45),
  },
  appVersion: {
    alignSelf: 'flex-start',
    marginTop: height(10),
    width: width(36),
  },
  throwback: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: width(13),
    marginLeft: width(6),
  },
  bankData: {
    backgroundColor: Colors.grey2,
    height: height(13),
    width: width(90),
    alignItems: 'flex-start',
    borderRadius: 15,
    padding: width(4),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
