import React from 'react';
import { View } from 'react-native';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';

export const EventTime = ({ currentDate, currentTime }) => (
  <View>
    <Text textAlign="left">
      {currentDate}, {currentTime}
    </Text>
    <Spacer amount={2} />
  </View>
);
