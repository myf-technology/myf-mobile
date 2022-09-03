import { IManageCategoryBottomSheetState } from './types';

export const initialState: IManageCategoryBottomSheetState = {
  category: null,
  controls: {
    visible: false,
    status: null,
    message: null,
  },
};
