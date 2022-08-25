import { SafeAreaView, View } from 'react-native';
import { Spacer } from '../../components';
import { CategoryListBottomSheet } from '../../components/BottomSheet/CategoryListBottomSheet';
import styles from './styles';
import { CreateBalanceForm, Header } from './_components';

export const Dashboard = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <Spacer amount={15} />
        <View style={styles.createBalanceFormContainer}>
          <CreateBalanceForm balanceType="INCOME" />
          <CreateBalanceForm balanceType="EXPENSE" />
        </View>
      </SafeAreaView>
      <CategoryListBottomSheet />
    </>
  );
};
