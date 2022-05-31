import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { SquaredInput } from '../../../components/SquaredInput';
import { Text } from '../../../components/Text';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { NAVIGATORS } from '../../../navigation/constants';
import { postFinancePasswordAPI } from '../../../services/finance-password';
import { readAccountId } from '../../../storage/storageAccountId';

export const FinancePassword = () => {
  const { navigate } = useNavigation();
  const [digitOne, setDigitOne] = useState('');
  const [digitTwo, setDigitTwo] = useState('');
  const [digitThree, setDigitThree] = useState('');
  const [digitFour, setDigitFour] = useState('');

  const onDigitOneChange = digitOne + digitTwo + digitThree + digitFour;

  const onPress = async () => {
    const account_id = await readAccountId();
    const data = {
      password: onDigitOneChange,
      account_uuid: account_id,
    };
    const res = await postFinancePasswordAPI(data);

    if (onDigitOneChange.length === 4) {
      return navigate(NAVIGATORS.PRIVATE as never);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: Layout.paddingHorizontal,
        backgroundColor: Colors.white,
      }}
    >
      <Spacer amount={4} />
      <View>
        <Text textAlign="left" font="title">
          Cadastre sua senha financeira
        </Text>
        <Spacer amount={2} />
        <Text textAlign="left">
          Para realizar pagamentos e transferências será necessário o uso de uma
          senha para prosseguir com as operações.
        </Text>
      </View>
      <Spacer amount={15} />
      <SquaredInput
        digitOne={setDigitOne}
        digitTwo={setDigitTwo}
        digitThree={setDigitThree}
        digitFour={setDigitFour}
      />
      <Spacer amount={15} />
      <Button onPress={onPress} theme="dark" title="Confirmar" />
    </SafeAreaView>
  );
};
