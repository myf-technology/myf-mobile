import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Spacer } from '../../components';
import { CategoryListBottomSheet } from '../../components/BottomSheet/CategoryListBottomSheet';
import { ManageCategoryBottomSheet } from '../../components/BottomSheet/ManageCategoryBottomSheet';
import { Warning } from '../../components/Warning';

import styles from './styles';
import { CreateBalanceForm, Header } from './_components';

export const Dashboard = () => {
  const [warging, setWarning] = useState(false);
  return (
    <>
      {warging ? (
        <Warning onCloseWarningPress={() => setWarning(!warging)} />
      ) : null}
      <SafeAreaView style={styles.container}>
        <Header />
        <Spacer amount={15} />
        <View style={styles.createBalanceFormContainer}>
          <CreateBalanceForm balanceType="INCOME" />
          <CreateBalanceForm balanceType="EXPENSE" />
        </View>
      </SafeAreaView>
      <CategoryListBottomSheet />
      <ManageCategoryBottomSheet />
    </>
  );
};
