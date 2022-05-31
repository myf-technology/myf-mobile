import instance from '..';
import { readToken } from '../../storage/storageToken';

export const getBalanceAPI = async () => {
  const Authorization = await readToken();

  const res = await instance({
    method: 'GET',
    url: '/balance',
    headers: {
      Authorization,
    },
  });

  return res;
};
