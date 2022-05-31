import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React from 'react';
import { Image, View } from 'react-native';

import { Button } from '../../../../components/Button';
import { Icon } from '../../../../components/Icon';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { height, width } from '../../../../constants/responsive';
import { READ } from '../../../../navigation/Private/Pix/Pay/Read/constants';
import { CameraOverlay } from '../../../register/_components/CameraOverlay';

export const QRreader = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(READ.CONFIRM as never);
  };

  return (
    <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back}>
      <View style={{ width: width(100), height: height(100) }}>
        <View
          style={{
            marginTop: height(8),
            marginLeft: width(27),
            elevation: 5,
          }}
        >
          <Icon
            name="Valepay"
            fill="white"
            height={height(5)}
            width={width(47)}
          />
        </View>

        <CameraOverlay label="Escaneie o QR CODE" mode="QRCode" />
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: height(76),
          marginLeft: width(5),
          width: width(90),
        }}
      >
        <Button onPress={onPress} title="Escanear" />
      </View>
      <BottomSheet snapPoints={[height(80), height(10)]}>
        <View style={{ alignItems: 'center' }}>
          <Spacer amount={2} />
          <Text>Seu nome</Text>
          <Spacer amount={10} />
          <Image source={require('../../../../../assets/images/QRcode.png')} />
          <Spacer amount={2} />
          <View style={{ width: width(60) }}>
            <Text>Este é o seu código, mostre-o para receber pagamentos</Text>
          </View>
          <Spacer amount={8} />
          <View style={{ width: width(90) }}>
            <Button title="Cobre seu amigo" />
          </View>
        </View>
      </BottomSheet>
    </Camera>
  );
};
