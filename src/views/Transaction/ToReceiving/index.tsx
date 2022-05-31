import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Details } from './_components/Details';
import { detailsControl } from './_helpers/detailsControl';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { TORECEIVING } from '../../../navigation/Private/Pix/Receive/ToReceiving/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const ToReceiving = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(TORECEIVING.CUSTOMQR as never);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Recebendo
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">
        Quem for pagar vai ver essas informações quando escanear o QR Code
      </Text>
      <Spacer amount={4} />
      <View>
        <Text textAlign="left" font="title">
          R$ 0,00
        </Text>
      </View>
      <Spacer amount={4} />

      {detailsControl.map(({ title, content }) => (
        <View key={title}>
          <Details title={title} content={content} />
          <Spacer amount={2} />
        </View>
      ))}
      <Spacer amount={10} />

      <Button onPress={onPress} theme="dark" title="Continuar" />
    </RegisterLayout>
  );
};
