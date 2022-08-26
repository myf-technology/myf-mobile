import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Spacer } from '../../components';
import { CategoryListBottomSheet } from '../../components/BottomSheet/CategoryListBottomSheet';
import { Warning } from '../../components/Warning';

import styles from './styles';
import { CreateBalanceForm, Header } from './_components';

export const Dashboard = () => {
  const [warging, setWarning] = useState(true);
  return (
    <>
      {warging ? (
        <Warning onCloseWarningPress={() => setWarning(!warging)} />
      ) : null}
      <SafeAreaView style={styles.container}>
        <Header />
        <Spacer amount={15} />
        <View style={styles.createBalanceFormContainer}>
          <CreateBalanceForm categoryType="income" />
          <CreateBalanceForm categoryType="expense" />
        </View>
      </SafeAreaView>
      <CategoryListBottomSheet />
    </>
  );
};
