import { StyleSheet } from 'react-native';
import { height, width } from '../../../../../../constants/responsive';

export default StyleSheet.create({
  cameraOverlay: {
    flex: 1,
    position: 'absolute',
    width:width(100),
    height: height(100),
  },
  svgContainer: {
    flex: 1,
  },
});
