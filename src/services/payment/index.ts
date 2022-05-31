import base64 from 'react-native-base64';

import instance from '..';
import { readAccountId } from '../../storage/storageAccountId';
import { readToken } from '../../storage/storageToken';

export const consultBarcodeAPI = async (barcode: string) => {
  const Authorization = await readToken();

  const res = await instance({
    method: 'POST',
    url: '/billit/consulting',
    headers: {
      Authorization,
    },
    data: {
      barcode,
    },
  });

  return res;
};

export interface createPaymentAPIParams {
  amount: number;
  barcode: string;
  reference: string;
  due_date: string;
  pay_date: string;
}

export const createPaymentAPI = async (data: createPaymentAPIParams) => {
  const Authorization = await readToken();
  const accountId = await readAccountId();
  const base64f = base64.encode(`${accountId}:${1234}`);

  const res = await instance({
    method: 'POST',
    url: '/billit/payment',
    headers: {
      Authorization,
      'Authorization-hash': base64f,
    },
    data,
  });

  return res;
};
