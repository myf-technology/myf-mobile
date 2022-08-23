import { PayloadAction } from '@reduxjs/toolkit';
import { IBottomSheetControlPayload, IBottomSheetState } from './types';

export const bottomSheetControl = (
  state: IBottomSheetState,
  action: PayloadAction<IBottomSheetControlPayload>,
) => {
  state.controls.visible = action.payload.visible;
};
