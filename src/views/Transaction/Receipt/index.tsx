import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Destination } from './_Component/Destination';
import { EventTime } from './_Component/EventTime';
import { Head } from './_Component/Head';
import { Origin } from './_Component/Origin';
import { Price } from './_Component/Price';
import { destinations } from './_helpers/destinations';
import { origins } from './_helpers/origins';
import styles from './styles';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { DASHBOARD } from '../../../navigation/Private/Dashboard/constants';
import { PRIVATE } from '../../../navigation/Private/constants';

export const Receipt = () => {
  const { navigate } = useNavigation();
  const onCrossPress = () => {
    navigate(PRIVATE.DASHBOARD as never, {
      screen: DASHBOARD.DASHBOARD,
    });
  };

  const currentDate = '12 AGO 2022';
  const currentTime = '02:56';
  const price = '250,00';

  return (
    <SafeAreaView>
      <ScrollView style={styles.margin} showsVerticalScrollIndicator={false}>
        <Head onCrossPress={onCrossPress} />
        <EventTime currentDate={currentDate} currentTime={currentTime} />
        <Price price={price} />
        <View>
          <Text textAlign="left" font="title2">
            Origem
          </Text>
          {origins.map(({ discription, content }) => (
            <Origin
              key={discription}
              discription={discription}
              content={content}
            />
          ))}
        </View>
        <Spacer amount={4} />
        <View>
          <Text textAlign="left" font="title2">
            Destino
          </Text>
          {destinations.map(({ discription, content }) => (
            <Destination
              key={discription}
              discription={discription}
              content={content}
            />
          ))}
        </View>
        <Spacer amount={4} />
        <Text>--------------------------------------------------</Text>
        <Spacer amount={2} />
        <View>
          <Text textAlign="left" font="body">
            ValePay
          </Text>
          <Spacer amount={1} />
          <Text textAlign="left">CNPJ 54,356,3256,3256</Text>
        </View>
        <Spacer amount={6} />
        <Button title="Compartilhar comprovante" />
      </ScrollView>
    </SafeAreaView>
  );
};
