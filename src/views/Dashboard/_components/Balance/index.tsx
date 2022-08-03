import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import Colors, { colorTypes } from '../../../../constants/Colors';
import { width } from '../../../../constants/responsive';

interface balanceProps {
  balanceAmount?: string;
  pennyColor?: colorTypes;
}

export const Balance = ({ balanceAmount, pennyColor }: balanceProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}> Balace</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: Colors.yellow3, fontSize: 20 }}>{balanceAmount}</Text>
          <View style={{ marginLeft: width(1) }}>
            <Text style={{ color: Colors.yellow3, fontSize: 10 }}>R$</Text>
            <Icon height={10} name='Penny' fill={pennyColor} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
