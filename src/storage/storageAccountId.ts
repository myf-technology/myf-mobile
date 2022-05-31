import { storageKeys } from './constants';

import { getData, storeData } from '.';

export const storeAccountId = async (accountId: string) => {
  storeData(storageKeys.ACCOUNT_ID, accountId);
};

export const readAccountId = async () => {
  try {
    const res = await getData(storageKeys.ACCOUNT_ID);

    return res;
  } catch (error) {
    return error;
  }
};
