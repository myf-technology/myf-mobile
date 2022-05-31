import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const Head = () => {
  const receivedValue = '25.55';
  const sendTo = 'Barbara Campelo';

  return (
    <View>
      <Text textAlign="left" font="title">
        Transferindo
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left" font="title4">
        R$ {receivedValue}
      </Text>
      <Spacer amount={1} />
      <Text textAlign="left">para {<Text font="subhead">{sendTo}</Text>}</Text>
    </View>
  );
};
