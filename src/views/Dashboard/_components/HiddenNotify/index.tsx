/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components';
import { Icon } from '../../../../components/Icon';
import { ColorNames } from '../../../../constants';

interface notifyProps {
  notify?: string;
  pennyColor?: ColorNames;
}

export const HiddenNotify = ({ notify, pennyColor }: notifyProps) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 10 }}>Notify</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text color="yellow" typography="headline">
          {notify}
        </Text>
        <Icon name="ArrowForward" fill={pennyColor} />
      </TouchableOpacity>
    </View>
  );
};
