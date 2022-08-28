import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCategoryById } from './actions/getCategoryById';
import { IManageCategoryBottomSheetState } from './types';
import { getCategoryByIdFactory } from './actions/getCategoryById';

export const extraReducers = (
  builder: ActionReducerMapBuilder<IManageCategoryBottomSheetState>,
) => {
  builder.addCase(getCategoryById.pending, getCategoryByIdFactory.pending);
  builder.addCase(getCategoryById.fulfilled, getCategoryByIdFactory.fulfilled);
  builder.addCase(getCategoryById.rejected, getCategoryByIdFactory.rejected);
};
