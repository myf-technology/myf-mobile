import React from 'react';
import { View } from 'react-native';

import styles from './Styles';

import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const PixCopyPaste = () => (
  <RegisterLayout>
    <View style={styles.title}>
      <Text textAlign="left" font="title">
        Insira o código do QR Code para pagar
      </Text>
    </View>
    <Spacer amount={4} />
    <Input label="Cole o código aqui" />
    <Spacer amount={34} />
    <Button title="Continuar" />
  </RegisterLayout>
);
