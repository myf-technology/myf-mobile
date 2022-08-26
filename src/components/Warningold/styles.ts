import { StyleSheet } from 'react-native';
import { width } from '../../constants';

export default StyleSheet.create({
  transparenceBackground: {
    backgroundColor: 'rgba(112, 52, 522, 0.3)',
    justifyContent: 'center',
    position: 'absolute',
    height: width(200),
    width: width(100),
    zIndex: 1,
  },
  warningContainer: {
    backgroundColor: 'rgba(999, 999, 999, 0.2)',
    borderRadius: width(5),
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: width(90),
    zIndex: 2,
  },
  textWidthAdjust: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width(70),
  },
});
