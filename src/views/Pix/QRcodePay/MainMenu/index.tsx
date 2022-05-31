import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import navigationControl from './_component/navigationControl';
import { containerButtons } from './types';

import { ContainerButton } from '../../../../components/ContainerButton';
import { iconNameProp } from '../../../../components/Icon/types';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const QRcodePay = () => {
  const { navigate } = useNavigation();
  const onPress = (prefix: iconNameProp) => {
    navigationControl(prefix, navigate);
    console.log(prefix);
  };

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title">
        Pagar com QR Code
      </Text>

      <Spacer amount={4} />

      {containerButtons.map(({ prefix, text, suffix }) => (
        <View key={prefix}>
          <Spacer amount={2} />
          <ContainerButton
            onPress={() => onPress(prefix)}
            prefix={prefix}
            suffix={suffix}
          >
            <Text>{text}</Text>
          </ContainerButton>
        </View>
      ))}
    </RegisterLayout>
  );
};
