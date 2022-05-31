import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { RECEIVE } from '../../../navigation/Private/Pix/Receive/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Receiving = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(RECEIVE.TORECEIVING as never);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Qual é o valor que você quer receber?
      </Text>

      <Spacer amount={8} />
      <View>
        {/* This component should be an input */}
        <Text font="title">R$ 0,00</Text>
      </View>
      <Spacer amount={40} />
      <Button onPress={onPress} theme="dark" title="Continuar" />
    </RegisterLayout>
  );
};
