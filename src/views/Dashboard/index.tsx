import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import { useRef, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Spacer } from '../../components';
import { CreateCategorySheet } from '../../components/CreateCategorySheet';
import styles from './styles';
import { Header } from './_components';
import { CategoryListBottomSheet } from './_components/CategoryListBottomSheet';
import { CreateBalanceForm } from './_components/CreateBalanceForm';

export const Dashboard = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <Spacer amount={15} />
        <View style={styles.createBalanceFormContainer}>
          <CreateBalanceForm categoryType="income" />
          <CreateBalanceForm categoryType="expense" />
        </View>
      </SafeAreaView>
      <CategoryListBottomSheet
      // {...{ onItemPress }} ref={bottomSheetRef}
      />
    </>
  );
};
