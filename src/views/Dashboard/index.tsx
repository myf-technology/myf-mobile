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
  const [categoryChosen, setCategoryChosen] = useState('');
  const [amountChosen, setAmountChosen] = useState(false);
  const [description, setDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [onOff, setOnOff] = useState(false);
  const [amount, setAmount] = useState('');
  const [InOut, setInOut] = useState(true);
  const [outUp, setOutUp] = useState(1);
  const [inUp, setInUp] = useState(1);

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
      setAmount('');
    }, 2000);
  };

  const onSendOut = () => {
    setLoading(true);
    setTimeout(() => {
      setAmountChosen(false);
      setCategoryChosen('');
      setDescription(false);
      setShowButton(false);
      setArrow(false);
      setLoading(false);
      setAmount('');
    }, 2000);
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => (setInOut(true), setOutUp(1), setInUp(300))}>
                <Icon name='Penny' fill='green' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => (setInOut(false), setOutUp(1), setInUp(300))}>
                <Icon name='Penny' fill='red' />
              </TouchableOpacity>
            </View>
            <Spacer amount={2} />
            {InOut ? (
              <View>
                <Describe
                  content={categoryChosen}
                  color={Colors.yellow3}
                  onPress={() => (setOutUp(1), setInUp(300))}
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
                    <Icon name='ArrowForward' fill='yellow3' />
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
                    style={{ marginTop: width(10) }}
                    color={Colors.yellow3}
                  />
                ) : null}
              </View>
            ) : (
              <View
                style={{
                  width: width(90),
                  alignItems: 'flex-end',
                  alignSelf: 'flex-end'
                }}
              >
                <Describe
                  content={categoryChosen}
                  color={Colors.yellow3}
                  onPress={() => (setOutUp(1), setInUp(300))}
                />
                <Spacer amount={2} />
                {amountChosen ? (
                  <MaskInput
                    placeholderTextColor={Colors.grey}
                    style={{ ...styles.inputMask, color: onOff ? Colors.yellow3 : Colors.yellow3 }}
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
                    <Icon name='ArrowForward' fill='yellow3' />
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
                {loading ? (
                  <ActivityIndicator
                    size={'large'}
                    style={{ marginTop: width(10), marginRight: width(38) }}
                    color={Colors.yellow3}
                  />
                ) : null}
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
