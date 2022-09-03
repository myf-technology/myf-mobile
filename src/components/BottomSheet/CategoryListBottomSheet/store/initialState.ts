import { IBottomSheetState } from './types';

export const initialState: IBottomSheetState = {
  list: [],
  controls: {
    balanceType: null,
    status: null,
    visible: false,
    message: null,
  },
};
