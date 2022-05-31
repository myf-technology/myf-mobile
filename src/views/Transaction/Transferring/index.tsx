import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { DESTINY } from '../../../navigation/Private/Transfer/Destiny/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Transferring = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(DESTINY.DESTINY as never);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Qual é o valor da transferência?
      </Text>
      <Spacer amount={2} />
      <Text textAlign="left">Saldo disponível em conta R$ 2.000,00</Text>
      <Spacer amount={8} />
      <View>
        {/* TODO: this should be an input instead */}
        <Text font="title">R$ 0,20</Text>
      </View>
      <Spacer amount={40} />
      <Button onPress={onPress} theme="dark" title="Continuar" />
    </RegisterLayout>
  );
};
