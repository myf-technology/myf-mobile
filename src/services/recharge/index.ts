import base64 from 'react-native-base64';

import instance from '..';
import { readAccountId } from '../../storage/storageAccountId';
import { readToken } from '../../storage/storageToken';

export const getRechargeOperatorsAPI = async (data) => {
  try {
    const Authorization = await readToken();
    const res = await instance({
      method: 'POST',
      url: '/recharge/operators',
      data: data,
      headers: {
        Authorization: Authorization,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProductsOperatorsAPI = async (data) => {
  try {
    const Authorization = await readToken();
    const res = await instance({
      method: 'POST',
      url: '/recharge/products/operator',
      data: data,
      headers: {
        Authorization: Authorization,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postFinalizeRechargeAPI = async (data) => {
  try {
    const Authorization = await readToken();
    const accountId = await readAccountId();
    const base64f = base64.encode(`${accountId}:${1234}`);

    const res = await instance({
      method: 'POST',
      url: '/recharge/finalize/recharge',
      data: data,
      headers: {
        Authorization: Authorization,
        'Authorization-hash': base64f,
      },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
