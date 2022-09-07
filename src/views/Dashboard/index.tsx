// import {
//   postBalanceAsync,
//   postBalanceClear,
// } from '../../store/reducers/balance/action';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { BRLCurrencyToDecimal } from '../../utils/functions/BRLCurrencyToDecimal';
import { inCategories } from './_components/InCategory/inCategories';
import { InCategory } from './_components/InCategory/InCategory';
import { HiddenNotify } from './_components/HiddenNotify';
import React, { SetStateAction, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { PennyInOut } from './_components/PennyInOut';
import { Spacer } from '../../components/Spacer';
import { Balance } from './_components/Balance';
import BottomSheet from '@gorhom/bottom-sheet';
import { Agenda } from './_components/Agenda';
import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
// import { Store } from '../../store/types';
import { Incoming } from './Incoming';
import styles from './styles';
import moment from 'moment';
import { Colors, height } from '../../constants';

export const Dashboard = () => {
  const [description, setDescription] = useState<boolean | string>(false);
  // const selector = useSelector((state: Store) => state.balance);

  const [categoryChosen, setCategoryChosen] = useState('');
  const [amountChosen, setAmountChosen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showDate, setShowDate] = useState('');
  const [amount, setAmount] = useState('');
  const [InOut, setInOut] = useState(true);
  const [outUp, setOutUp] = useState(1);
  const [inUp, setInUp] = useState(1);

  // const dispatch = useDispatch();

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
  // const decimalAmout = BRLCurrencyToDecimal(amount);

  const onSend = async () => {
    // const newBalance = {
    //   // * TODO :  add real category Id
    //   categoryId: '86e47da4-da05-4717-964c-19ac8f951980',
    //   amount: Number(amount),
    //   description: typeof description === 'boolean' ? '' : description,
    //   eventDate: showDate || moment().format('YYYY-MM-DD'),
    // };
    // setCategoryChosen('');
    // setAmount('');
    // dispatch(postBalanceAsync(newBalance));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewBorders}>
          <View style={styles.header}>
            <Agenda nextEvent="24/01" />
            <Balance balanceAmount="-1.231,23" pennyColor="red" />
            <HiddenNotify notify="Notify" />
          </View>
          <View style={styles.flow}>
            <PennyInOut
              onPennyInPress={() => (
                setAmountChosen(false),
                setDescription(false),
                setShowButton(false),
                setCategoryChosen(''),
                // setLoading(false),
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
                onDescriptionChanges={(text: SetStateAction<boolean>) =>
                  setDescription(text)
                }
                onDiscribePress={() => (setOutUp(1), setInUp(300))}
                onPress={() => (setOutUp(1), setInUp(300))}
                onArrowInPress={() => setDescription(true)}
                onChangeInText={(masked, unmasked) => {
                  setAmount(unmasked);
                  onChange(masked);
                  unmasked.length > 0
                    ? setShowButton(true)
                    : setShowButton(false);
                }}
                categoryInChosen={categoryChosen}
                amountChosen={amountChosen}
                showInButton={showButton}
                description={description}
                onSendIn={onSend}
                // loading={selector.controls.loading}
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
                onDescriptionChanges={(text: SetStateAction<boolean>) =>
                  setDescription(text)
                }
                onDiscribePress={() => (setOutUp(1), setInUp(300))}
                onPress={() => (setOutUp(1), setInUp(300))}
                onArrowInPress={() => setDescription(true)}
                onChangeInText={(masked, unmasked) => {
                  setAmount(unmasked);
                  onChange(masked);
                  unmasked.length > 0
                    ? setShowButton(true)
                    : setShowButton(false);
                }}
                categoryInChosen={categoryChosen}
                amountChosen={amountChosen}
                showInButton={showButton}
                description={description}
                onSendIn={onSend}
                loading={selector.controls.loading}
                value={amount}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet
        backgroundStyle={{ backgroundColor: 'black' }}
        snapPoints={[inUp]}>
        <ScrollView style={{ backgroundColor: 'black', height: height(90) }}>
          <View style={styles.bottomSheet}>
            <Text color="yellow">{InOut ? 'Earnings' : 'Expensives'}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.plusSign}>
              <Icon name="ArrowForward" width={20} fill="green" />
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
      {/* {selector.controls.error
        ? Alert.alert('messageTitle', selector.controls.error, [
            {
              text: 'ok',
              onPress: () => {
                dispatch(postBalanceClear());
                setAmountChosen(false);
                setShowButton(false);
                setDescription(false);
                setCategoryChosen('');
              },
            },
          ])
        : null} */}
    </>
  );
};
