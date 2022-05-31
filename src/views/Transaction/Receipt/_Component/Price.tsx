import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const Price = ({ price }) => (
  <View>
    <Text textAlign="left" font="title2">
      Valor
    </Text>
    <Spacer amount={2} />
    <Text textAlign="left">R$ {price}</Text>
    <Spacer amount={4} />
  </View>
);
