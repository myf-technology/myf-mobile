import { IBottomSheetState } from './types';

export const initialState: IBottomSheetState = {
  list: [],
  controls: {
    status: null,
    visible: false,
    message: null,
  },
};
