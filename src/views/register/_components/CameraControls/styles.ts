import { StyleSheet } from 'react-native';

import { height } from '../../../../constants/responsive';

export default StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: height(10),
  },

  cameraButtonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },

  switchCameraWrapper: {
    flex: 0.7,
    alignItems: 'center',
  },
});
