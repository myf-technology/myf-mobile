import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, View } from 'react-native';

import { BottomSheetTokenSMS } from '../../../components/BottomSheets/BottomSheetTokenSMS';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import {
  postRegisterNewAdressAPI,
  putValidateTokenAPI,
} from '../../../services/pix';
import { readAccountId } from '../../../storage/storageAccountId';
import { readUuid } from '../../../storage/storageUuid';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const RegisterKeys = () => {
  const bottomSheetRef = useRef();
  const [keyValue, setKeyValue] = useState();
  const [code, setCode] = useState();
  const [adressKeyUuid, setAdressKeyUuid] = useState();

  const { params } = useRoute();

  const getText = () => {
    switch (params.key) {
      case 'CPF':
        return {
          title: 'Registre seu CPF',
          subtitle:
            'Insira o CPF que você quer usar para receber transferencia por pix.',
          label: 'Digite seu CPF',
        };

      case 'PHONE':
        return {
          title: 'Registre seu celular',
          subtitle:
            'Insira o celular que você quer usar para receber transferencia por pix.',
          label: 'Digite seu celular',
        };

      case 'EMAIL':
        return {
          title: 'Registre seu email',
          subtitle:
            'Insira o email que você quer usar para receber transferencia por pix.',
          label: 'Digite seu email',
        };

      default:
        return {
          title: '',
          subtitle: '',
          label: '',
        };
    }
  };

  const handlerText = (value) => {
    setKeyValue(value);
  };

  const onSaveTrigger = async () => {
    const accountId = await readAccountId();

    const data = {
      key: {
        type: params.key,
        value: keyValue,
      },
      account: {
        uuid: accountId,
      },
    };
    console.log(data);

    const res = await postRegisterNewAdressAPI(data);

    if (res.status === 200) {
      setAdressKeyUuid(res.data.uuid);
      bottomSheetRef.current.snapToIndex(1);
      return;
    }

    Alert.alert(
      'Envio não realizado',
      'Não foi possível enviar o código para este número. Verifique o número e tente novamente.'
    );
  };

  const onValidateToken = async () => {
    const data = {
      code: code,
    };

    const res = await putValidateTokenAPI(data, adressKeyUuid);

    bottomSheetRef.current.snapToIndex(0);
  };

  const onCloseModal = () => {
    bottomSheetRef.current.snapToIndex(0);
  };

  return (
    <>
      <RegisterLayout>
        <Text font="title" textAlign="left">
          {getText().title}
        </Text>
        <Spacer amount={2} />

        <View style={{ width: width(70) }}>
          <Text textAlign="left">{getText().subtitle}</Text>
        </View>
        <Spacer amount={6} />

        <Input
          returnKeyType="done"
          onChangeText={handlerText}
          maxLength={30}
          keyboardType={params.key === 'EMAIL' ? 'email-address' : 'numeric'}
          label={getText().label}
        />
        <Spacer amount={35} />

        <Button onPress={onSaveTrigger} title="Salvar" theme="dark" />
      </RegisterLayout>

      <BottomSheetTokenSMS
        phoneNumber={keyValue}
        bottomSheetRef={bottomSheetRef}
        onCloseModal={onCloseModal}
        onPressConfirm={onValidateToken}
        onChangeText={setCode}
      />
    </>
  );
};
