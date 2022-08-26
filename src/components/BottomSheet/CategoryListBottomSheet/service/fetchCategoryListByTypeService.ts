import { instance } from '../../../../services';
import { BalanceType } from '../../../../types/balanceType';

export const fetchCategoriesByTypeService = (balanceType: BalanceType) =>
  instance(`/category?balanceType=${balanceType}`);
