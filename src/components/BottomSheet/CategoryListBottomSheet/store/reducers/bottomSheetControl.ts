import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IBottomSheetControlPayload, IBottomSheetState } from '../types';

const bottomSheetControl: CaseReducer<
  IBottomSheetState,
  PayloadAction<IBottomSheetControlPayload>
> = (state, action) => {
  state.list = [];

  state.controls = {
    ...state.controls,
    visible: action.payload.visible,
    message: null,
    status: null,
  };
};

export const bottomSheetReducerFactory = {
  bottomSheetControl,
};
