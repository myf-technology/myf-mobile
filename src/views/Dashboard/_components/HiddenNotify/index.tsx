import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../../constants/Colors';

export const HiddenNotify = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}>Notify</Text>
      <Text style={{ color: Colors.yellow4, fontSize: 20 }}>Hidden</Text>
    </View>
  );
};
