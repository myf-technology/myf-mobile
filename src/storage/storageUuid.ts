import { storageKeys } from './constants';

import { getData, storeData } from '.';

export const storeUuid = async (uuid: string) => {
  storeData(storageKeys.UUID, uuid);
};

export const readUuid = async () => {
  try {
    const res = await getData(storageKeys.UUID);

    return res;
  } catch (error) {
    return error;
  }
};
