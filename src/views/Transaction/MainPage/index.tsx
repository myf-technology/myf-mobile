import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { containerButton } from './_helpers/containerButton';
import { iconButtons } from './_helpers/iconButtons';
import { CurrentDate } from './components/CurrentDate';
import { Spend } from './components/Spends';

import { IconButton } from '../../../components/IconButton';
import { iconTypes } from '../../../components/IconButton/types';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import { TRANSACTION } from '../../../navigation/Private/Dashboard/Trasnsaction/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const Transactions = () => {
  const { navigate } = useNavigation();

  const handleIconButtonsPress = (key: iconTypes) => {
    switch (key) {
      case 'Ticket':
        console.log('oi');
        navigate(TRANSACTION.PAYMETHODS as never);

        break;

      default:
        break;
    }
  };

  const onPress = (key: number) => {
    console.log('oi');
  };

  return (
    <RegisterLayout>
      <Text font="title" textAlign="left">
        Transações
      </Text>
      <Spacer amount={4} />
      <View style={{ height: width(24) }}>
        <ScrollView
          horizontal
          bounces={false}
          pagingEnabled
          decelerationRate={'fast'}
          snapToInterval={54 + 30}
          showsHorizontalScrollIndicator={false}
        >
          {iconButtons.map(({ icon, label }) => (
            <View key={icon} style={{ width: width(22) }}>
              <IconButton
                onPress={() => handleIconButtonsPress(icon)}
                icon={icon}
                label={label}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <Spacer amount={4} />

      <Text font="subhead" textAlign="left">
        Movimentções
      </Text>
      <Spacer amount={1} />
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text textAlign="left">Atualizado em, </Text>
        </View>
        <View>
          <CurrentDate />
        </View>
      </View>
      <Spacer amount={2} />
      <Text textAlign="left">Fevereiro</Text>
      <Spacer amount={4} />
      {containerButton.map(({ key, icon, category, spend, brand, date }) => (
        <View key={key}>
          <Spend
            onPress={() => onPress(key)}
            category={category}
            brand={brand}
            icon={icon}
            spend={spend}
            date={date}
          />
          <Spacer amount={3} />
        </View>
      ))}
    </RegisterLayout>
  );
};
