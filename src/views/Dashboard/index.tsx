import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Spacer } from '../../components';
import { CategoryListBottomSheet } from '../../components/BottomSheet/CategoryListBottomSheet';
import { ManageCategoryBottomSheet } from '../../components/BottomSheet/ManageCategoryBottomSheet';
import { Warning } from '../../components/Warning';

import styles from './styles';
import { CreateBalanceForm, Header } from './_components';

export const Dashboard = () => {
  const [warging, setWarning] = useState(false);
  const createBalance = useSelector((store: any) => store.createBalance);

  const [incomeCategory, setIncomeCategory] = useState();
  const [expenseCategory, setExpenseCategory] = useState();

  useEffect(() => {
    if (!createBalance.selectedCategory) return;

    if (createBalance.selectCategory?.balanceType === 'EXPENSE') {
      return setExpenseCategory(createBalance.selectCategory);
    }

    setIncomeCategory(createBalance.selectedCategory);
  }, [incomeCategory, createBalance]);

  return (
    <>
      {warging ? (
        <Warning onCloseWarningPress={() => setWarning(!warging)} />
      ) : null}
      <SafeAreaView style={styles.container}>
        <Header />
        <Spacer amount={15} />
        <View style={styles.createBalanceFormContainer}>
          <CreateBalanceForm
            selectedCategory={incomeCategory}
            balanceType="INCOME"
          />
          <CreateBalanceForm
            balanceType="EXPENSE"
            selectedCategory={expenseCategory}
          />
        </View>
      </SafeAreaView>
      <CategoryListBottomSheet />
      <ManageCategoryBottomSheet />
    </>
  );
};
