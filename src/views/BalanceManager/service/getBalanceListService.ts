import { Items } from '../_helpers/Items';

export const getBalanceListService = async () => {
  if (true) {
    return { data: Items, status: 200 };
  }

  throw new Error('mock error');
};
