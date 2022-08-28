import { BalanceType } from '../../../../types/balanceType';
import { ICategoryItem } from '../../CategoryListBottomSheet/store/types';

export interface ICategoryRequestBody {
  name: string;
  projectedAmount?: number;
  description?: string;
  autoInsert: boolean;
  balanceType: BalanceType;
}

export interface IManageCategoryBottomSheetState {
  category: null | ICategoryItem;
  controls: {
    visible: boolean;
    status: null | 'fulfilled' | 'rejected' | 'pending';
    message: null | string;
  };
}

export interface IGetCategoryByIdPayload {
  categoryId: string;
}

export interface IManageCategoryBottomSheetControlPayload {
  visible: boolean;
}
export interface IEditCategoryPayload {
  categoryId: string;
  categoryData: ICategoryRequestBody;
}
