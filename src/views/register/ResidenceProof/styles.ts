import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');
const newWidth = height * (3 / 4);
const widthOffset = -((newWidth - width) / 2);

export default StyleSheet.create({
  selfie: {
    flex: 1,
  },
  safeAreaStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: widthOffset,
    left: widthOffset,
    zIndex: 0,
  },
  outterContainer: {
    height: '100%',
  },
});
