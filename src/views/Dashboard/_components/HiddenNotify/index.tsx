import React from 'react';
import {Text, View} from 'react-native';

export const HiddenNotify = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 10}}>Notify</Text>
      <Text style={{color: 'rgba(155,5,5,0.9)', fontSize: 20}}>Hidden</Text>
    </View>
  );
};
