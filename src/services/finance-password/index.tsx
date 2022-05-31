import instance from '..';
import { readAccountId } from '../../storage/storageAccountId';
import { readToken } from '../../storage/storageToken';

export const getFinancePasswordAPI = async () => {
  try {
    const Authorization = await readToken();
    const accountId = await readAccountId();
    const res = await instance({
      method: 'GET',
      url: `/account/check/password/${accountId}`,
      headers: {
        Authorization: Authorization,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

export const postFinancePasswordAPI = async (data) => {
  try {
    const Authorization = await readToken();
    const res = await instance({
      method: 'POST',
      url: `/account/password/`,
      data,
      headers: {
        Authorization: Authorization,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
