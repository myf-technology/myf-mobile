import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import styles from './Styles';
import { navigationControl } from './_constants/navigationControl';
import { askedOptions } from './types';

import { ContainerButton } from '../../../../../components/ContainerButton';
import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';
import RegisterLayout from '../../../../register/_helpers/RegisterLayout';

export const Asked = () => {
  const { navigate } = useNavigation();
  const onPress = (text: string) => {
    navigationControl(text, navigate);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Perguntas frequentes
      </Text>
      <Spacer amount={4} />
      {askedOptions.map(({ text, suffix, key }) => (
        <View key={key}>
          <ContainerButton onPress={() => onPress(text)} suffix={suffix}>
            <View style={styles.innerButton}>
              <Text textAlign="left">{text}</Text>
            </View>
          </ContainerButton>
          <Spacer amount={2} />
        </View>
      ))}
    </RegisterLayout>
  );
};
