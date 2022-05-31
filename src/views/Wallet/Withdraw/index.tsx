import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { ContainerButtons } from './_Component/ContainerButtons';
import navigationControl from './_help/navigationControl';

import { ContainerButton } from '../../../components/ContainerButton';
import { iconTypes } from '../../../components/IconButton/types';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Withdraw = () => {
  const { navigate } = useNavigation();
  const onPress = (key: iconTypes) => {
    navigationControl(key, navigate);
  };

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title">
        Retirar dinheiro
      </Text>
      <Spacer amount={6} />

      {ContainerButtons.map(({ prefix, suffix, text }) => (
        <View key={prefix}>
          <ContainerButton
            onPress={() => onPress(prefix)}
            prefix={prefix}
            suffix={suffix}
          >
            <Text>{text}</Text>
          </ContainerButton>
          <Spacer amount={2} />
        </View>
      ))}
    </RegisterLayout>
  );
};
