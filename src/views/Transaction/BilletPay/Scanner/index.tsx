import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Overlay } from './_components/Overlay';
import { Throwback } from './_components/Throwback';

import { Button } from '../../../../components/Button';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import Colors from '../../../../constants/Colors';
import { height, width } from '../../../../constants/responsive';
import { SCANNER } from '../../../../navigation/Private/PayMethods/Scanner/constants';

export const Scanner = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const { navigate } = useNavigation();
  const onPress = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );

    setTimeout(() => {
      navigate(SCANNER.MANUALLY as never);
    }, 500);
  };

  useFocusEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );

      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    return () => {
      (async () =>
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        ))();
    };
  });

  const handleBarCodeScanned: BarCodeScannedCallback = ({
    data,
    target,
    type,
  }) => {
    console.log(data, target, type);
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {/* Add code inside barscanner */}
      </View>
      <Overlay />

      <View
        style={{
          width: height(100),
          alignSelf: 'center',
          position: 'absolute',
        }}
      >
        <Spacer amount={8} />
        <Throwback />
        <Text color={Colors.white}>Posicione o código de barras no centro</Text>
        <Spacer amount={23} />

        <View style={{ width: '45%', alignSelf: 'center' }}>
          <Button
            onPress={onPress}
            theme="transparent"
            title="Digitar manualmente"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: width(100),
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
