import { inCategories } from './_components/InCategory/inCategories';
import { InCategory } from './_components/InCategory/InCategory';
import { height, width } from '../../constants/responsive';
import { HiddenNotify } from './_components/HiddenNotify';
import React, { SetStateAction, useState } from 'react';
import { PennyInOut } from './_components/PennyInOut';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Spacer';
import { Balance } from './_components/Balance';
import BottomSheet from '@gorhom/bottom-sheet';
import { Agenda } from './_components/Agenda';
import { Text } from '../../components/Text';
import Colors from '../../constants/Colors';
import { Incoming } from './Incoming';
import styles from './styles';
import { Icon } from '../../components/Icon';

export const Dashboard = () => {
  const [categoryChosen, setCategoryChosen] = useState('');
  const [amountChosen, setAmountChosen] = useState(false);
  const [description, setDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDate, setShowDate] = useState('');
  const [amount, setAmount] = useState('');
  const [InOut, setInOut] = useState(true);
  const [outUp, setOutUp] = useState(1);
  const [inUp, setInUp] = useState(1);

  const onChange = (masked: any) => {
    if (masked.length > 0) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const SelectCategory = (category: string) => {
    setCategoryChosen(category);
  };

  const onSendIn = () => {
    setCategoryChosen('');
    setAmountChosen(false);
    setDescription(false);
    setShowButton(false);
    setLoading(true);
    setTimeout(() => {
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
            <PennyInOut
              onPennyInPress={() => (
                setAmountChosen(false),
                setDescription(false),
                setShowButton(false),
                setCategoryChosen(''),
                setLoading(false),
                setInOut(true),
                setAmount(''),
                setOutUp(1),
                setInUp(300),
                setOutUp(1)
              )}
              onPennyOutPress={() => (
                setDescription(false),
                setAmountChosen(false),
                setShowButton(false),
                setCategoryChosen(''),
                setAmount(''),
                setInOut(false),
                setOutUp(1),
                setInUp(300),
                setOutUp(1)
              )}
            />
            <Spacer amount={2} />
            {InOut ? (
              <Incoming
                InOut={InOut}
                showDate={showDate}
                dateValue={showDate}
                onChangeDate={(masked, unmasked) => {
                  setShowDate(masked);
                }}
                incomeDescription={description}
                onDescriptionChanges={(text: SetStateAction<boolean>) => setDescription(text)}
                onDiscribePress={() => (setOutUp(1), setInUp(300))}
                onPress={() => (setOutUp(1), setInUp(300))}
                onArrowInPress={() => setDescription(true)}
                onChangeInText={(masked, unmasked) => {
                  setAmount(masked);
                  onChange(masked);
                  unmasked.length > 0 ? setShowButton(true) : setShowButton(false);
                }}
                categoryInChosen={categoryChosen}
                amountChosen={amountChosen}
                showInButton={showButton}
                description={description}
                onSendIn={onSendIn}
                loading={loading}
                value={amount}
              />
            ) : (
              <Incoming
                InOut={InOut}
                showDate={showDate}
                dateValue={showDate}
                onChangeDate={(masked, unmasked) => {
                  setShowDate(masked);
                }}
                incomeDescription={description}
                onDescriptionChanges={(text: SetStateAction<boolean>) => setDescription(text)}
                onDiscribePress={() => (setOutUp(1), setInUp(300))}
                onPress={() => (setOutUp(1), setInUp(300))}
                onArrowInPress={() => setDescription(true)}
                onChangeInText={(masked, unmasked) => {
                  setAmount(masked);
                  onChange(masked);
                  unmasked.length > 0 ? setShowButton(true) : setShowButton(false);
                }}
                categoryInChosen={categoryChosen}
                amountChosen={amountChosen}
                showInButton={showButton}
                description={description}
                onSendIn={onSendIn}
                loading={loading}
                value={amount}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet backgroundStyle={{ backgroundColor: 'black' }} snapPoints={[inUp]}>
        <ScrollView style={{ backgroundColor: 'black', height: height(90) }}>
          <View style={styles.bottomSheet}>
            <Text color={Colors.yellow3}>{InOut ? 'Earnings' : 'Expensives'}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.plusSign}>
              <Icon name='PlusSign' width={20} fill='grey3' />
            </TouchableOpacity>
          </View>
          <Spacer amount={2} />
          {inCategories.map(({ category, index }: any) => (
            <InCategory
              key={index}
              Category={category}
              onPress={() => {
                SelectCategory(category), setInUp(1);
                setAmountChosen(true);
              }}
            />
          ))}
        </ScrollView>
      </BottomSheet>
    </>
  );
};
