import { instance } from '../../../../services';
import { BalanceType } from '../../../../types/balanceType';

export const fetchCategoriesByTypeService = (balanceType: BalanceType) =>
  instance({
    method: 'GET',
    url: `/category?balanceType=${balanceType}`,
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbnNreWpzQGljbG91ZC5jb20iLCJpYXQiOjE2NjA4NzQ3OTJ9.txbediMxUBsslqWSVCnoPaic0h8AnKrD8aKevgbrReA',
    },
  });
