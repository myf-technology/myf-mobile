import React from 'react';
import { View } from 'react-native';

import styles from './Styles';
import { containerProps } from './_components/containertProps';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const Permissions = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Permissão e notificação
    </Text>
    <Spacer amount={6} />
    {containerProps.map(({ key, suffix, description, titleContainer }) => (
      <View key={key}>
        <ContainerButton suffix={suffix}>
          <View style={styles.titleContainer}>
            <Text font="subhead" textAlign="left">
              {titleContainer}
            </Text>
          </View>
          <View style={styles.insideContainer}>
            <Text textAlign="left">{description}</Text>
          </View>
        </ContainerButton>
        <Spacer amount={2} />
      </View>
    ))}
  </RegisterLayout>
);
