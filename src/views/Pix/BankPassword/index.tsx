import React from 'react';
import { View } from 'react-native';

import { SquaredInput } from './Components';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const BankPassword = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Informe sua senha
    </Text>
    <Spacer amount={6} />
    {/* TODO: need to create the logical */}
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
      }}
    >
      <SquaredInput></SquaredInput>
      <SquaredInput></SquaredInput>
      <SquaredInput></SquaredInput>
      <SquaredInput></SquaredInput>
    </View>
    <Spacer amount={45} />
    <Button title="Próximo passo" theme="dark" />
  </RegisterLayout>
);
