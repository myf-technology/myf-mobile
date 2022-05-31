import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../../components/Button';
import { Spacer } from '../../../components/Spacer';
import { Text } from '../../../components/Text';
import { width } from '../../../constants/responsive';
import { CONFIRM } from '../../../navigation/Private/Mobile/Price/Confirm/constants';
import { postFinalizeRechargeAPI } from '../../../services/recharge';
import RegisterLayout from '../../register/_helpers/RegisterLayout';

// REFACTURE: change compoent's name to match the file name.
export const RechargeConfirm = () => {
  const rechargeOperators = useSelector((state) => state.recharge);
  const { navigate } = useNavigation();
  const handlerNextStep = async () => {
    navigate(CONFIRM.DASHBOARD as never);
    const data = {
      ddd: rechargeOperators.ddd,
      phone_number: rechargeOperators.phoneNumber,
      operator_id: rechargeOperators.selectedOperatorId,
      reference: rechargeOperators.reference,
      name: rechargeOperators.name,
      product_id: rechargeOperators.idProduto,
      amount: rechargeOperators.valor,
    };

    const res = await postFinalizeRechargeAPI(data);
  };

  return (
    <RegisterLayout>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text textAlign="left" font="title">
            Recarga
          </Text>
          <Spacer amount={1} />
          <Text textAlign="left">
            ({rechargeOperators.ddd}) {rechargeOperators.phoneNumber}
          </Text>
          <Spacer amount={1} />
          <Text textAlign="left">Operadora - {rechargeOperators.name} </Text>
        </View>
        <View style={{ marginTop: width(14), marginRight: width(4) }}>
          <Text font="title">R$ {rechargeOperators.valor},00</Text>
        </View>
      </View>
      <Spacer amount={30} />
      <Button
        loading={rechargeOperators.loading}
        disabled={rechargeOperators.loading}
        theme={rechargeOperators.loading ? 'disabled' : 'dark'}
        onPress={handlerNextStep}
        title="Pagar"
      />
    </RegisterLayout>
  );
};
