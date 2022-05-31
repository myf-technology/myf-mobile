import { View } from 'react-native';

import styles from './styles';
import { Iprops } from './types';

import { CameraButton } from '../../../../components/CameraButton';
import { Icon } from '../../../../components/Icon';
// import SwitchCamera from '../../../../icons/_components/SwitchCamera';

export const CameraControls = ({
  switchCamera,
  takePicture,
  testID,
}: Iprops) => (
  <View testID={testID} style={styles.container}>
    <View style={styles.cameraButtonWrapper}>
      <CameraButton testID="camera-button" onPress={takePicture} />
    </View>
    <View style={styles.switchCameraWrapper}>
      <Icon name="SwitchCamera" testID="switch-camera" onPress={switchCamera} />
    </View>
  </View>
);
