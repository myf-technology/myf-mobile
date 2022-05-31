import { Camera as ExpoCamera } from 'expo-camera';
import React from 'react';

export class Camera extends React.Component {
  static async requestCameraPermissionsAsync() {
    return { status: 'granted' };
  }

  takePictureAsync(options) {
    return null;
  }

  pausePreview(options) {
    return null;
  }

  static Constants = {
    Type: {
      front: 'front',
      back: 'back',
    },
  };

  render() {
    return <ExpoCamera>{this.props.children}</ExpoCamera>;
  }
}
