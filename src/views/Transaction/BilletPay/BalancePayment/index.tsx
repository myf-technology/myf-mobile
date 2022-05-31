import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Head } from './_component/Head';
import { TicketInfo } from './_component/TicketInfo';

import { Button } from '../../../../components/Button';
import { ContainerButton } from '../../../../components/ContainerButton';
import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Text';
import { actionPaymentPay } from '../../../../store/reducers/payment/actions';
import RegisterLayout from '../../../register/_helpers/RegisterLayout';

export const BalancePayment = () => {
  const payment = useSelector(({ payment }) => payment);
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const onPress = async () => {
    dispatch(
      actionPaymentPay(
        {
          amount: payment.amount,
          barcode: payment.barcode,
          reference: payment.barcode,
          due_date: payment.date_due,
          pay_date: moment().format('YYYY-MM-DD'),
        },
        navigate
      )
    );
  };

  // console.log(payment);

  // useEffect(() => {
  //   if (payment.controls.paymentStatus) {
  //     if (payment.controls.paymentStatus === 'ERROR') {
  //       Alert.alert(
  //         'Pagamento não efetuado.',
  //         'Verifique os dados informados.'
  //       );
  //     } else {

  //     }
  //   }
  // }, [payment, navigate]);

  return (
    <RegisterLayout>
      <Head price={payment.amount} />
      <View>
        <TicketInfo title="Beneficiário" content={payment.beneficiary} />
        <Spacer amount={2} />
      </View>

      <View>
        <TicketInfo
          title="Vencimento"
          content={moment(payment.date_due).format('DD-MM-YYYY')}
        />
        <Spacer amount={2} />
      </View>

      <Spacer amount={6} />
      <ContainerButton prefix="CardId" suffix="ArrowForward">
        <Text textAlign="left">Forma de pagamento</Text>
        <Spacer amount={1} />
        <Text font="subhead" textAlign="left">
          Saldo disponível: R$0,00
        </Text>
      </ContainerButton>
      <Spacer amount={20} />
      <Button
        onPress={onPress}
        title="Pagar"
        theme={payment.controls.status === 'LOADING' ? 'disabled' : 'dark'}
        disabled={payment.controls.status === 'LOADING'}
        loading={payment.controls.status === 'LOADING'}
      />
    </RegisterLayout>
  );
};

// after this screen some payment confirmation should appear. if doesnt, at least most ask to enter password again.
