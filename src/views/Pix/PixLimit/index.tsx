import React from 'react';
import { View } from 'react-native';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const PixLimit = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Limite Pix
    </Text>
    <Spacer amount={2} />
    <View style={{ width: width(80) }}>
      <Text textAlign="left">
        Insira o valor para ajudar a definir, pense o quanto costuma transferir
        por dia.
      </Text>
    </View>
    <Spacer amount={6} />
    {/* TODO: need a property mask to entry cash digits */}
    <Input placeholder="R$ 0,00" keyboardType="numeric" label="Limite diário" />
    <Spacer amount={6} />
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
      }}
    ></View>
    <Spacer amount={30} />
    <Button title="Próximo passo" theme="dark" />
  </RegisterLayout>
);
