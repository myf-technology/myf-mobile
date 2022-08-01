import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const Balance = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}>Saldo mensal</Text>
      <TouchableOpacity>
        <Text style={{ color: 'rgba(95,95,95,0.9)', fontSize: 20 }}>-R$ 231,00</Text>
      </TouchableOpacity>
    </View>
  );
};
