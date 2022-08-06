import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import Colors, { colorTypes } from '../../../../constants/Colors';

interface notifyProps {
  notify?: string;
  pennyColor?: colorTypes;
}

export const HiddenNotify = ({ notify, pennyColor }: notifyProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}>Notify</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text style={{ color: Colors.yellow3, fontSize: 20 }}>{notify}</Text>
        <Icon name='Penny' fill={pennyColor} />
      </TouchableOpacity>
    </View>
  );
};
