/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../../../components/Icon';
import Colors, { colorTypes } from '../../../../constants/Colors';
import styles from './styles';

interface agendaProps {
  nextEvent?: string;
  pennyColor?: colorTypes;
}

export const Agenda = ({ nextEvent, pennyColor }: agendaProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.agenda}>Agenda</Text>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Text style={{ color: Colors.yellow3, fontSize: 20 }}>{nextEvent}</Text>
        <Icon name='Penny' fill={pennyColor} />
      </TouchableOpacity>
    </View>
  );
};
