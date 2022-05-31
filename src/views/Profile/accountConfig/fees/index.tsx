import React from 'react';
import { View } from 'react-native';

import styles from './Styles';
import { Tariffs } from './_components/Tariffs';
import { TariffsStatus } from './_components/TariffsInfo';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const Fees = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Tarifas e taxas
    </Text>
    <Spacer amount={2} />
    <View style={styles.subtitle}>
      <Text textAlign="left">
        Confira abaixo quais são as taxas que são utilizadas
      </Text>
    </View>
    <Spacer amount={2} />
    <Text font="subhead" textAlign="left">
      Minha Conta
    </Text>
    <Spacer amount={2} />
    {TariffsStatus.map(({ description, status }) => (
      <View key={description}>
        <Spacer amount={3} />
        <Tariffs status={status}>{description}</Tariffs>
      </View>
    ))}
  </RegisterLayout>
);
