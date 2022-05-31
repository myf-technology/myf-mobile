import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { containerButtons } from './_components/containerButtons';
import { navigationControl } from './_components/navigationControl';

import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const Safety = () => {
  const { navigate } = useNavigation();
  const onPress = (text: any) => {
    navigationControl(text, navigate);
    console.log(text);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Segurança
      </Text>
      <Spacer amount={4} />
      {containerButtons.map(({ suffix, text }) => (
        <View key={text}>
          <ContainerButton onPress={() => onPress(text)} suffix={suffix}>
            <Text>{text}</Text>
          </ContainerButton>
          <Spacer amount={2} />
        </View>
      ))}
    </RegisterLayout>
  );
};
