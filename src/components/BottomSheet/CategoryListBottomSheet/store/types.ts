import { BalanceType } from '../../../../types/balanceType';

export interface ICategoryItem {
  autoInsert: boolean;
  balanceType: 'INCOME' | 'EXPENSE';
  createdAt: Date;
  deletedAt: Date;
  description: string;
  id: string;
  name: string;
  projectedAmount: string;
  updatedAt: string;
  userId: string;
}

export interface IBottomSheetState {
  list: ICategoryItem[];
  controls: {
    status: null | 'fulfilled' | 'loading' | 'rejected';
    visible: boolean;
    message: null | string;
    balanceType: null | BalanceType;
  };
}

export interface IBottomSheetControlPayload {
  visible: boolean;
}

export interface IFetchCategoryListByTypePayload {
  balanceType: null | BalanceType;
}
