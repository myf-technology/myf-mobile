import { Alert } from 'react-native';
import { Dispatch } from 'redux';

import { PAYMENT } from './constants';

import { BALANCEPAYMENT } from '../../../navigation/Private/PayMethods/Manually/PaymentForm/BalancePayment/constants';
import { MANUALLY } from '../../../navigation/Private/PayMethods/Manually/constants';
import {
  consultBarcodeAPI,
  createPaymentAPI,
  createPaymentAPIParams,
} from '../../../services/payment';

const barCode = (payload) => ({
  type: PAYMENT.BAR_CODE,
  payload,
});

export const updateBarCode =
  (payload, navigate) => async (dispatch: Dispatch) => {
    dispatch(
      barCode({
        controls: {
          status: 'LOADING',
        },
      })
    );

    try {
      const res = await consultBarcodeAPI(payload);

      if (res.status === 200) {
        dispatch(barCode(res.data.data));
        dispatch(
          barCode({
            controls: {
              status: 'SUCCESS',
            },
          })
        );
        navigate(MANUALLY.FORM as never);

        return;
      }

      //todo: throw new Error();
    } catch (error) {
      dispatch(
        barCode({
          controls: {
            status: 'LOADING',
          },
        })
      );

      console.log(error.response.data);

      Alert.alert(
        'Código não reconhecido.',
        'Não foi possivel ler o código de barras.'
      );

      dispatch(
        barCode({
          controls: {
            status: 'ERROR',
            message: error.response.data.message,
          },
        })
      );
    }
  };

const paymentPay = (payload) => ({
  type: PAYMENT.PAY,
  payload,
});

export const actionPaymentPay =
  (payload: createPaymentAPIParams, navigate: any) =>
  async (dispatch: Dispatch) => {
    dispatch(
      paymentPay({
        controls: {
          status: 'LOADING',
        },
      })
    );

    try {
      const res = await createPaymentAPI(payload);
      if (res.status === 200) {
        dispatch(paymentPay(res.data.data.status));
        dispatch(
          paymentPay({
            controls: {
              status: 'SUCCESS',
            },
          })
        );
        navigate(BALANCEPAYMENT.RECEIPT as never);
      }
      console.log('payment', res.data);
    } catch (error) {
      dispatch(
        paymentPay({
          controls: {
            status: 'LOADING',
          },
        })
      );
      console.log('payment error', error.response.data);

      Alert.alert('Pagamento não efetuado.', 'Verifique os dados informados.');
      dispatch(
        paymentPay({
          controls: {
            status: 'ERROR',
            message: error.response.data.message,
            paymentStatus: 'ERROR',
          },
        })
      );
    }
  };
