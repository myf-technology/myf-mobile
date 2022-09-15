import { authInstance } from '../../../../../services';

export interface ICreateBalanceServiceParams {
  amount: number;
  description?: string;
  eventDate?: string;
  categoryId: string;
}

export const createBalanceService = async (
  data: ICreateBalanceServiceParams,
) => {
  return authInstance({
    method: 'POST',
    url: '/balance',
    data,
  });
};
