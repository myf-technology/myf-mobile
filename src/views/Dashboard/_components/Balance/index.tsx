/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components';
import { Icon } from '../../../../components/Icon';
import { width, Colors, ColorNames } from '../../../../constants';

interface balanceProps {
  balanceAmount?: string;
  pennyColor?: ColorNames;
}

export const Balance = ({ balanceAmount, pennyColor }: balanceProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}> Balace</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: Colors.yellow2, fontSize: 20 }}>
            {balanceAmount}
          </Text>
          <View style={{ marginLeft: width(1) }}>
            <Text color="yellow2" typography="body">
              R$
            </Text>
            <Icon height={10} name="ArrowForward" fill={pennyColor} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
