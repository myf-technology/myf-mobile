// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SelectInput } from './_Components/SelectInput';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { READ } from '../../../navigation/Private/Pix/Pay/Read/constants';
import { PAY } from '../../../navigation/Private/Pix/Pay/constants';
import { PIX } from '../../../navigation/Private/Pix/constants';
import { PRIVATE } from '../../../navigation/Private/constants';
import { NAVIGATORS } from '../../../navigation/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const TransferDestiny = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate(NAVIGATORS.PRIVATE as never | any, {
      screen: PRIVATE.PIX,
      params: {
        screen: PIX.PAY,
        params: {
          screen: PAY.READ,
          params: {
            screen: READ.CONFIRM,
          },
        },
      },
    });
  };

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title">
        Para quem voce quer transferir R$ {'25,55'}
      </Text>

      <Spacer amount={4} />
      <Input label="Nome, CPF/CNPJ ou chave Pix" />
      <Spacer amount={4} />
      <SelectInput label="Contatos frequenes" />
      <Spacer amount={6} />
      <Button onPress={onPress} title="Transferir" />
    </RegisterLayout>
  );
};
