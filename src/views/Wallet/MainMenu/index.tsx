import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import styles from './Styles';
import { CardContainer } from './_components/CardContainer';
import { ContainerButtons } from './_components/ContainerButtons';
import { FunctionContainer } from './_components/FunctionContainer';
import { MenuIconButton } from './_components/MenuIconButton';
import { SheetModalHead } from './_components/SheetModalHead';
import { Title } from './_components/Title';

import { BaseBalance } from '../../../components/Balance/BaseBalance';
import { Spacer } from '../../../components/Spacer';
import { height, width } from '../../../constants/responsive';
import { WALLET } from '../../../navigation/Private/Dashboard/Wallet/constants';
import { Text } from '../../../components/Text';
import { TouchableOpacity, View } from 'react-native';

export const Wallet = () => {
  const { navigate } = useNavigation();
  const [sheetModal, setSheetModal] = useState(false);
  const onPressed = (index) => {
    setSheetModal(!sheetModal);
  };

  const currentData = '07/04/22';
  const currentHours = '20:00';

  const balanceHandler = () => {
    navigate(WALLET.BALANCE);
  };

  return (
    <>
      <View style={styles.container}>
        <Spacer amount={6} />
        <TouchableOpacity onPress={balanceHandler}>
          <View style={{ alignItems: 'center', marginRight: width(4) }}>
            <BaseBalance />
          </View>
        </TouchableOpacity>

        <Spacer amount={2} />
        <View style={{ alignSelf: 'center' }}>
          <MenuIconButton />
        </View>

        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheet snapPoints={[height(1)]}>
            <BottomSheetScrollView showsVerticalScrollIndicator={false}>
              <Title text='Funções' />

              <FunctionContainer onPress={onPressed} />

              <Title text='Cartões' />

              <CardContainer onPress={() => ''} />
              <BottomSheet snapPoints={[height(sheetModal ? 55 : 1)]}>
                <View style={styles.sheetModal}>
                  <SheetModalHead
                    currentData={currentData}
                    currentHours={currentHours}
                  />
                  <View style={{ marginLeft: width(5) }}></View>
                  {/* Here we have the container buttuns */}
                  <Spacer amount={4} />
                  <ContainerButtons
                    category='Outros'
                    brand='Boticario'
                    cost='200,00'
                    date='08/02'
                  />
                  <Spacer amount={3} />
                  <ContainerButtons
                    category='Tecnologia'
                    brand='Kabum'
                    cost='200,00'
                    date='08/02'
                  />
                </View>
              </BottomSheet>
            </BottomSheetScrollView>
          </BottomSheet>
        </GestureHandlerRootView>
      </View>
    </>
  );
};
