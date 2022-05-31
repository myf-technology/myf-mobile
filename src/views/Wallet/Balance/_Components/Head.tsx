import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const Head = () => (
  <View>
    <Text textAlign="left" font="title">
      Saldo
    </Text>
    <Spacer amount={2} />
    <Text textAlign="left">Acompanhe suas atividades dentro do app</Text>
  </View>
);
