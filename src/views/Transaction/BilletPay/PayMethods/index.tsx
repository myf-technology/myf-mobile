import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { PAYMETHODS } from '../../../../navigation/Private/PayMethods/constants';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const PayMethods = () => {
  const { navigate } = useNavigation();

  const goToScanner = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );

    setTimeout(() => {
      navigate(PAYMETHODS.SCANNER as never);
    }, 500);
  };

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title">
        Pagar conta
      </Text>
      <Spacer amount={4} />
      <ContainerButton
        onPress={goToScanner}
        prefix="Barcode"
        suffix="ArrowForward"
      >
        <Text>Usar leitor de código de barras</Text>
      </ContainerButton>
      <Spacer amount={2} />
      <ContainerButton
        onPress={() => navigate(PAYMETHODS.MANUALLY as never)}
        prefix="Type"
        suffix="ArrowForward"
      >
        <Text>Usar leitor de código de barras</Text>
      </ContainerButton>
    </RegisterLayout>
  );
};
