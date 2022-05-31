import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Operator } from './_Component/Operator';
import { SelectInput } from './_Component/SelectInput';
import { Operators } from './_helpers/Operators';
import styles from './styles';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Radio } from '../../../components/Radio';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { height } from '../../../constants/responsive';
import { MOBILE } from '../../../navigation/Private/Mobile/constants';
import {
  getProductsOperatorsAPI,
  getRechargeOperatorsAPI,
} from '../../../services/recharge';
import { RECHARGE } from '../../../store/reducers/recharge/constants';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

export const MobileCredit = () => {
  const { navigate } = useNavigation();
  const [selected, setSelected] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [number, setNumber] = useState();
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

  const bottomSheetRef = useRef<bottomSheet>(null);

  const rechargeOperators = useSelector((state) => state.recharge);

  const dispatch = useDispatch();

  const onPress = async () => {
    bottomSheetRef?.current?.snapToIndex(1);
    showOptions ? setShowOptions(false) : setShowOptions(true);

    const data = {
      ddd: number.slice(0, 2),
      phone_number: number.slice(2, 11),
    };

    dispatch({
      type: RECHARGE.GET_OPERATOR_LOADING,
      payload: { loading: true },
    });

    const res = await getRechargeOperatorsAPI(data);

    dispatch({
      type: RECHARGE.GET_OPERATORS,
      payload: {
        loading: false,
        ddd: data.ddd,
        phoneNumber: data.phone_number,
        operators: res.data.operators,
        reference: res.data.reference,
      },
    });
  };

  const onCompanyPress = (company, operatorId) => {
    // REFACTOR: the param name 'company' need to match to his others references
    // as 'name' called in store and 'discricao' called in map down below

    dispatch({
      type: RECHARGE.SELECTED_OPERATOR,
      payload: {
        operatorId,
        company,
      },
    });

    setSelected(company);
    bottomSheetRef?.current?.snapToIndex(0);
  };

  const getNumber = (value) => {
    setNumber(value);
  };

  const handlerNextStep = async () => {
    const data = {
      ddd: rechargeOperators.ddd,
      phone_number: rechargeOperators.phoneNumber,
      operator_id: rechargeOperators.selectedOperatorId,
      reference: rechargeOperators.reference,
    };

    dispatch({
      type: RECHARGE.GET_OPERATOR_LOADING,
      payload: {
        loading: true,
      },
    });

    const res = await getProductsOperatorsAPI(data);

    dispatch({
      type: RECHARGE.GET_PRODUCTS,
      payload: {
        loading: false,
        products: res.data.products,
      },
    });

    navigate(MOBILE.PRICE as never);
  };
  console.log(rechargeOperators);

  return (
    <RegisterLayout>
      <Text textAlign="left" font="title">
        Nova recarga
      </Text>
      <Spacer amount={6} />
      <Input onChangeText={getNumber} label="Número do celular" />
      <SelectInput
        selected={selected}
        onPress={onPress}
        arrowDown={showOptions ? false : true}
      />
      <Spacer amount={3} />
      {/* This radio chacker needs review */}
      <Radio text=" Salvar esse número " />
      <Spacer amount={10} />
      <Button
        loading={rechargeOperators.loading}
        disabled={rechargeOperators.loading}
        onPress={handlerNextStep}
        theme={rechargeOperators.loading ? 'disabled' : 'dark'}
        title="Próximo passo"
      />
      <BottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        snapPoints={[height(1), height(40)]}
      >
        {rechargeOperators.loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bottomsheet}>
            {rechargeOperators.operators.map(({ descricao, idOperadora }) => (
              <Operator
                key={idOperadora}
                onPress={() => onCompanyPress(descricao, idOperadora)}
                company={descricao}
              />
            ))}
          </View>
        )}
      </BottomSheet>
    </RegisterLayout>
  );
};
