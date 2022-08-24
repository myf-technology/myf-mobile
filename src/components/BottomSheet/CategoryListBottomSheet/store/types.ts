export interface ICategoryItem {
  name: string;
  projectedAmount: string;
  averageAmount: string;
  description: string;
  autoInsert: string;
  averageDate: string;
  balanceType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IBottomSheetState {
  list: ICategoryItem[];
  controls: {
    status: null | 'fulfilled' | 'loading' | 'rejected';
    visible: boolean;
    message: null | string;
  };
}

export interface IBottomSheetControlPayload {
  visible: boolean;
}
