import { instance } from '../../../../../services';

export interface ICreateBalanceServiceParams {
  amount: number;
  description?: string;
  eventDate?: Date;
  categoryId: string;
}

export const createBalanceService = async (
  data: ICreateBalanceServiceParams,
) => {};
