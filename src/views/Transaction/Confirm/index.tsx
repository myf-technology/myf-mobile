import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, View } from 'react-native';

import { Head } from './_Components/Head';
import { LinedInfo } from './_Components/LinedInfo';
import { linedInfos } from './_helpers/linedInfos';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { CONFIRM } from '../../../navigation/Private/Pix/Pay/Read/Confirm/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Confirm = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    Alert.alert('confirmar', 'confirmar', [
      {
        onPress: () => {
          navigate(CONFIRM.RECEIPT as never);
        },
        text: 'Confirmar',
      },
    ]);
  };

  return (
    <RegisterLayout>
      <Head />
      <Spacer amount={6} />
      {linedInfos.map(({ title, content }) => (
        <View key={title}>
          <LinedInfo title={title} content={content} />
          <Spacer amount={2} />
        </View>
      ))}
      <Spacer amount={20} />

      <Button onPress={onPress} title="Transferir" />
    </RegisterLayout>
  );
};
