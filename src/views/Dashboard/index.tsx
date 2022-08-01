/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { InvisibleInput } from '../../components/InvisibleInput';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { Toggle } from '../../components/Toggle';
import Colors from '../../constants/Colors';
import { Incoming } from './Incoming';
import styles from './styles';
import { Agenda } from './_components/Agenda';
import { Balance } from './_components/Balance';
import { HiddenNotify } from './_components/HiddenNotify';
import BottomSheet from '@gorhom/bottom-sheet';
import { height } from '../../constants/responsive';

export const Dashboard = () => {
  const [onOff, setOnOff] = useState(false);
  const [InOut, setInOut] = useState(true);
  const [inUp, setInUp] = useState(1);
  const [outUp, setOutUp] = useState(1);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewBorders}>
          <View style={styles.header}>
            <Agenda />
            <Balance />
            <HiddenNotify />
          </View>
          <View style={styles.flow}>
            {/* <Incoming /> */}

            <Toggle
              on={onOff}
              onPress={() => {
                setOnOff(!onOff);
                setInOut(!InOut);
              }}
            />
            <Spacer amount={2} />
            {InOut ? (
              <TouchableOpacity
                onPress={() => {
                  setInUp(300), () => setOutUp(1);
                }}
              >
                <Text textAlign='left' color={Colors.yellow4}>
                  Chosse a category way IN...
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setOutUp(300), setInUp(1);
                }}
              >
                <Text textAlign='left' color={Colors.grey3}>
                  Chosse a category way OUT...
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet backgroundStyle={{ backgroundColor: 'black' }} snapPoints={[inUp]}>
        <View style={{ backgroundColor: 'black', height: height(90) }}>
          <TouchableOpacity
            onPress={() => {
              setInUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
          <TouchableOpacity
            onPress={() => {
              setInUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
          <TouchableOpacity
            onPress={() => {
              setInUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
        </View>
      </BottomSheet>
      <BottomSheet backgroundStyle={{ backgroundColor: 'black' }} snapPoints={[outUp]}>
        <View style={{ backgroundColor: 'black', height: height(90) }}>
          <TouchableOpacity
            onPress={() => {
              setOutUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
          <TouchableOpacity
            onPress={() => {
              setOutUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
          <TouchableOpacity
            onPress={() => {
              setOutUp(1);
            }}
          >
            <Text color={Colors.yellow3}>Category</Text>
          </TouchableOpacity>
          <Spacer amount={2} />
        </View>
      </BottomSheet>
    </>
  );
};
