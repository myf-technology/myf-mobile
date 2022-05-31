import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';

export const Head = ({ price }) => (
  <View>
    <Text textAlign="left" font="title">
      Pagar Conta
    </Text>
    <Text textAlign="left" font="title4">
      R${price}
    </Text>
    <Spacer amount={2} />
  </View>
);
