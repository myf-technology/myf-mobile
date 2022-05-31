import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconButton } from './_Components/IconButtons';
import { IconButtons } from './_helpers/IconButtons';

import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import Colors from '../../../constants/Colors';
import { height, width } from '../../../constants/responsive';
import { NAVIGATORS } from '../../../navigation/constants';

export const Aknowledgment = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          height: height(75),
        }}
      >
        <View style={{ marginRight: width(25) }}>
          <Text textAlign="left" font="title">
            Agradecemos
          </Text>
          <Text textAlign="left" font="title">
            pelo seu cadastro.
          </Text>
        </View>
        <Spacer amount={2} />
        <View
          style={{
            backgroundColor: 'grey',
            width: width(90),
            height: height(45),
            alignSelf: 'center',
          }}
        ></View>
        <Spacer amount={2} />
        <View style={{ width: width(90), alignSelf: 'center' }}>
          <Text textAlign="left">
            A partir de agora, vamos analisar os seus dados. Isso pode levar
            alguns dias, mas não se preocupe, assim que houver uma posição da
            nossa equipe a respeito do seu cadastro, entraremos em contato com
            você e se for aceito, poderá ter acesso à todas as funcionalidades
            do nosso App!
          </Text>
          <Spacer amount={2} />
          <TouchableWithoutFeedback
            onPress={() => navigate(NAVIGATORS.PRIVATE as never)}
          >
            <Text textAlign="left">Estamos aqui torcendo por você.</Text>
          </TouchableWithoutFeedback>
        </View>
        <Spacer amount={2} />
        <View
          style={{
            backgroundColor: 'black',
            width: width(100),
            height: height(25),
          }}
        >
          <View style={{ width: width(80), marginLeft: width(5) }}>
            <Spacer amount={2} />
            <Text textAlign="left" font="title3" color={Colors.white}>
              Enquanto isso aproveite para conhecer mais sobre nós.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            {IconButtons.map(({ icon }) => (
              <IconButton key={icon} icon={icon} />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
