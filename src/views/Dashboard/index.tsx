import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { InvisibleInput } from '../../components/InvisibleInput';
import { Spacer } from '../../components/Spacer';
import { Toggle } from '../../components/Toggle';
import Colors from '../../constants/Colors';
import styles from './styles';
import { Agenda } from './_components/Agenda';
import { Balance } from './_components/Balance';
import { HiddenNotify } from './_components/HiddenNotify';
import BottomSheet from '@gorhom/bottom-sheet';
import { height, width } from '../../constants/responsive';
import { inCategories } from './_components/InCategory/inCategories';
import { InCategory } from './_components/InCategory/InCategory';
import Describe from '../Dashboard/_components/Category/index';
import MaskInput, { Masks } from 'react-native-mask-input';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

export const Dashboard = () => {
  const [onOff, setOnOff] = useState(false);
  const [InOut, setInOut] = useState(true);
  const [inUp, setInUp] = useState(1);
  const [outUp, setOutUp] = useState(1);
  const [categoryChosen, setCategoryChosen] = useState('Chosse a category way IN...');
  const [amountChosen, setAmountChosen] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (masked: any) => {
    if (masked.length > 0) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  const onModalPress = (category: string) => {
    setCategoryChosen(category);
  };

  const onSendIn = () => {
    setArrow(false);
    setDescription(false);
    setAmountChosen(false);
    setShowButton(false);
    setCategoryChosen('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCategoryChosen('Chosse a category way IN...');
      setAmount('');
    }, 2000);
  };

  const onSendOut = () => {
    setDescription(false);
    setAmountChosen(false);
    setCategoryChosen('Chosse a category way OUT...');
    setAmount('');
    setArrow(false);
    setShowButton(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewBorders}>
          <View style={styles.header}>
            <Agenda nextEvent='24/01' />
            <Balance balanceAmount='-1.231,23' pennyColor='red' />
            <HiddenNotify notify='Notify' />
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
              <View>
                <Describe
                  color={Colors.yellow3}
                  onPress={() => (setOutUp(1), setInUp(300))}
                  content={
                    categoryChosen === 'Chosse a category way IN...' ||
                    categoryChosen === 'Chosse a category way OUT...' ? (
                      'Chosse a category way IN...'
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'center'
                        }}
                      >
                        <View>
                          <Icon name='Penny' fill='green' />
                        </View>
                        <View style={{ marginLeft: width(2) }}>
                          <Text color={Colors.yellow3}>{categoryChosen}</Text>
                        </View>
                      </View>
                    )
                  }
                />
                <Spacer amount={2} />
                {amountChosen ? (
                  <MaskInput
                    placeholderTextColor={Colors.grey}
                    style={{ ...styles.inputMask, color: onOff ? Colors.red : Colors.yellow3 }}
                    placeholder='R$ 0,00'
                    value={amount}
                    onChangeText={(masked, unmasked) => {
                      setAmount(masked);
                      onChange(masked);
                    }}
                    mask={Masks.BRL_CURRENCY}
                  />
                ) : null}
                {arrow ? (
                  <TouchableOpacity onPress={() => setDescription(true)} style={styles.arrow}>
                    <Icon name='ArrowForward' fill='green' color={Colors.grey} />
                  </TouchableOpacity>
                ) : null}
                {description ? (
                  <InvisibleInput
                    multiline
                    onFocus={() => {
                      setArrow(false);
                      setTimeout(() => {
                        setShowButton(true);
                      }, 1000);
                    }}
                    numberOfLines={10}
                    noShadow={true}
                    placeholder='Some description...'
                  />
                ) : null}
                {showButton ? <Button onPress={onSendIn} title='Send    √' theme='green' /> : null}
                {loading ? (
                  <ActivityIndicator
                    size={'large'}
                    style={{ marginTop: width(20) }}
                    color={Colors.yellow3}
                  />
                ) : null}
              </View>
            ) : (
              <View>
                <Describe
                  color='yellow3'
                  onPress={() => (setOutUp(1), setInUp(300))}
                  content={
                    categoryChosen === 'Chosse a category way OUT...' ||
                    categoryChosen === 'Chosse a category way IN...' ? (
                      'Chosse a category way OUT...'
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'center'
                        }}
                      >
                        <View>
                          <Icon name='Penny' fill='red' />
                        </View>
                        <View style={{ marginLeft: width(2) }}>
                          <Text color={Colors.yellow3}>{categoryChosen}</Text>
                        </View>
                      </View>
                    )
                  }
                />
                <Spacer amount={2} />
                {amountChosen ? (
                  <MaskInput
                    placeholderTextColor={Colors.grey}
                    style={{ ...styles.inputMask, color: onOff ? Colors.yellow3 : Colors.green }}
                    placeholder='R$ 0,00'
                    value={amount}
                    onChangeText={(masked, unmasked) => {
                      setAmount(masked);
                      onChange(masked);
                    }}
                    mask={Masks.BRL_CURRENCY}
                  />
                ) : null}
                {arrow ? (
                  <TouchableOpacity onPress={() => setDescription(true)} style={styles.arrow}>
                    <Icon name='ArrowForward' fill='red' color={Colors.grey} />
                  </TouchableOpacity>
                ) : null}
                {description ? (
                  <InvisibleInput
                    multiline
                    onFocus={() => {
                      setArrow(false);
                      setTimeout(() => {
                        setShowButton(true);
                      }, 1000);
                    }}
                    numberOfLines={10}
                    noShadow={true}
                    placeholder='Some description...'
                  />
                ) : null}
                {showButton ? <Button onPress={onSendOut} title='Send    √' theme='red' /> : null}
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet backgroundStyle={{ backgroundColor: 'black' }} snapPoints={[inUp]}>
        <View style={{ backgroundColor: 'black', height: height(90) }}>
          {inCategories.map(({ category, index }: any) => (
            <InCategory
              key={index}
              Category={category}
              onPress={() => {
                onModalPress(category), setInUp(1);
                setAmountChosen(true);
              }}
            />
          ))}
        </View>
      </BottomSheet>
      <BottomSheet backgroundStyle={{ backgroundColor: 'black' }} snapPoints={[outUp]}>
        <View style={{ backgroundColor: 'black', height: height(90) }}>
          {inCategories.map(({ category, index }: any) => (
            <InCategory key={index} Category={category} onPress={() => onModalPress(category)} />
          ))}
        </View>
      </BottomSheet>
    </>
  );
};
