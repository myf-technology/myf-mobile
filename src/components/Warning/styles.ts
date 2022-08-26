import { StyleSheet } from 'react-native';
import { width } from '../../constants';

export default StyleSheet.create({
  transparenceBackground: {
    position: 'absolute',
    width: width(100),
    height: width(200),
    zIndex: 1,
    backgroundColor: 'rgba(112, 52, 522, 0.3)',
  },
  warningContainer: {
    position: 'absolute',
    width: width(90),
    borderRadius: width(5),
    backgroundColor: 'rgba(999, 999, 999, 0.2)',
    alignItems: 'center',
    zIndex: 2,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    bottom: width(65),
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: width(80),
    marginTop: width(5),
  },
  topIcon: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    width: width(80),
  },
  textWidthAdjust: {
    width: width(80),
    alignItems: 'center',
    margin: width(2),
  },
  buttons: {
    flexDirection: 'row',
    width: width(50),
    justifyContent: 'space-between',
    marginBottom: width(4),
    marginTop: width(6),
  },
});
