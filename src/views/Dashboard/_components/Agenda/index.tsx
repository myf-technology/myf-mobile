/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components';
import { Icon } from '../../../../components/Icon';
import { ColorNames } from '../../../../constants';
import styles from './styles';

interface agendaProps {
  nextEvent?: string;
  pennyColor?: ColorNames;
}

export const Agenda = ({ nextEvent, pennyColor }: agendaProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.agenda}>Agenda</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text color="yellow" typography="caption">
          {nextEvent}
        </Text>
        <Icon name="ArrowForward" fill={pennyColor} />
      </TouchableOpacity>
    </View>
  );
};
