/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export const Agenda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.agenda}>Agenda</Text>
      <TouchableOpacity>
        <Text style={styles.calendar}>Dia 24</Text>
      </TouchableOpacity>
    </View>
  );
};
