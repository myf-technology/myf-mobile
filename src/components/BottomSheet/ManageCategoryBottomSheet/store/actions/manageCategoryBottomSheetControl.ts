import { PayloadAction } from '@reduxjs/toolkit';
import {
  IManageCategoryBottomSheetControlPayload,
  IManageCategoryBottomSheetState,
} from '../types';

export const manageCategoryBottomSheetControl = (
  state: IManageCategoryBottomSheetState,
  action: PayloadAction<IManageCategoryBottomSheetControlPayload>,
) => {
  state.category = null;

  state.controls = {
    message: null,
    status: null,
    visible: action.payload.visible,
  };
};
