import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Head } from './_Components/Head';
import { PriceList } from './_Components/PriceList';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { height } from '../../../constants/responsive';
import { PRICE } from '../../../navigation/Private/Mobile/Price/constants';
import { RECHARGE } from '../../../store/reducers/recharge/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const SelectPrice = () => {
  const { navigate } = useNavigation();
  const [selectors, setSelectors] = useState(false);
  const dispatch = useDispatch();

  const newState = useSelector((state) => state);
  const [isPrice, setIsPrice] = useState(
    `${newState.recharge.products[0].valor},00`
  );

  const onPress = async () => {
    bottomSheetRef?.current?.snapToIndex(1);
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const bottomSheetRef = useRef<BottomSheet>(null);

  const onPriceHandler = (valor, idProduto) => {
    dispatch({
      type: RECHARGE.SELECTED_PRODUCTS,
      payload: {
        valor,
        idProduto,
      },
    });

    bottomSheetRef?.current?.snapToIndex(0),
      // REFACTORY: if any amount value is passed the next page
      // doesnt show the default Value, it shows nothing istead.
      setIsPrice(`${valor},00`),
      setSelectors(true);
  };
  const handlerNextStep = () => {
    navigate(PRICE.CONFIRM);
  };

  return (
    <RegisterLayout>
      <Head priceChossen={isPrice} onPress={onPress} />
      <Spacer amount={35} />
      <Button
        loading={newState.recharge.loading}
        disabled={newState.recharge.loading}
        theme={newState.recharge.loading ? 'disabled' : 'dark'}
        onPress={handlerNextStep}
        title="Proximo passo"
      />
      <BottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        snapPoints={[height(1), height(70)]}
      >
        <View>
          {newState.recharge.loading ? (
            <ActivityIndicator />
          ) : (
            newState?.recharge?.products?.map(({ valor, idProduto }) => (
              <PriceList
                key={valor}
                onPress={() => onPriceHandler(valor, idProduto)}
                prices={`${valor},00`}
                // selector needs his functionality to be impleplemented
                selector={selectors}
              />
            ))
          )}
        </View>
      </BottomSheet>
    </RegisterLayout>
  );
};
