/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Incoming} from './Incoming';
import styles from './styles';
import {Agenda} from './_components/Agenda';
import {Balance} from './_components/Balance';
import {HiddenNotify} from './_components/HiddenNotify';

export const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewBorders}>
        <View style={styles.header}>
          <Agenda />
          <Balance />
          <HiddenNotify />
        </View>
        <View style={{marginTop: '40%'}}>
          <Incoming />
        </View>
      </View>
    </SafeAreaView>
  );
};
