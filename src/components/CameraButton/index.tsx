import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Iprops } from './types';

export const CameraButton = ({ onPress, testID }: Iprops) => (
  <TouchableOpacity
    testID={testID ? testID : 'camera-button-component'}
    onPress={onPress}
  >
    <View style={styles.outer}>
      <View style={styles.border}>
        <View style={styles.inner}></View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    height: 75,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    borderRadius: 100,
  },
  border: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    height: 55,
    backgroundColor: '#000',
    borderRadius: 100,
    width: 55,
  },
});
