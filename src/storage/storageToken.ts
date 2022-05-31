import { storageKeys } from './constants';

import { getData, storeData } from '.';

export const storeToken = async (token: string) => {
  storeData(storageKeys.TOKEN, `Bearer ${token}`);
};

export const readToken = async () => {
  try {
    const res = await getData(storageKeys.TOKEN);

    return res;
  } catch (error) {
    return error;
  }
};
