import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { width } from '../../../../constants/responsive';

export const SheetModalHead = ({ currentData, currentHours }) => (
  <View
    style={{
      alignItems: 'center',
      width: width(90),
      alignSelf: 'center',
    }}
  >
    <Text font="subhead">Movimentações</Text>
    <Spacer amount={1} />
    <Text>
      Atualizado em {<Text>{currentData}</Text>} as{' '}
      {<Text>{currentHours}</Text>}
    </Text>
    <Spacer amount={1} />
    <View style={{ alignSelf: 'flex-start' }}>
      <Text textAlign="left">Fevereiro</Text>
    </View>
  </View>
);
