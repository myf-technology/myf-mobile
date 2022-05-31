import React, { useState } from 'react';
import { View } from 'react-native';
import { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

import styles from './Styles';
import { OpenButton } from './_components/OpenButton';

import { ContainerButton } from '../../../components/ContainerButton';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const RegistrationData = () => {
  const [myDate, setMyDate] = useState(false);
  const [myDoc, setMyDoc] = useState(false);
  const onPressMyData = () => {
    setMyDate(!myDate);
    setMyDoc(false);
  };
  const onPressDocsData = () => {
    setMyDoc(!myDoc);
    setMyDate(false);
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Dados cadastrais
      </Text>
      <Spacer amount={4} />
      <View>
        <ContainerButton
          activeOpacity={2}
          onPress={onPressMyData}
          suffix={myDate === false ? 'ArrowDown' : 'ArrowUp'}
          prefix="Person"
        >
          <Text>Meus dados cadastrais</Text>
        </ContainerButton>
        <View style={styles.firstButton}>
          {myDate && (
            <OpenButton
              fullname="Daniel Zanirato"
              phoneNumber="(19) 99962-6004"
              address="Avenida papa pio XX-333 Jardin Chapadão, Campinas - SP, 13070-025"
              bday="05/03/1998"
              email="danielzanirato.design@gmail.com"
              cpf="365.658.965-33"
              entering={FadeIn.duration(500)}
              layout={Layout.delay(5000)}
              exiting={FadeOut.duration(300)}
            />
          )}
          <Spacer amount={5} />
          <ContainerButton
            onPress={onPressDocsData}
            suffix={myDoc === false ? 'ArrowDown' : 'ArrowUp'}
            prefix="Person"
          >
            <Text>Dados do documento</Text>
          </ContainerButton>
          <View style={styles.secondButton}>
            {myDoc && (
              <OpenButton
                IDnumber="3424234"
                dispatch="SP"
                dispatchDate="20/07/2014"
                entering={FadeIn.duration(500)}
                // layout={Layout.delay(5000)}
                // TODO: the button below needs to wait before gettin up
                exiting={FadeOut.duration(300)}
              />
            )}
          </View>
        </View>
      </View>
    </RegisterLayout>
  );
};
