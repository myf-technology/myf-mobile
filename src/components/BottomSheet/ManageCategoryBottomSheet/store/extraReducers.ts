import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCategoryById } from './actions/getCategoryById';
import { IManageCategoryBottomSheetState } from './types';
import { getCategoryByIdFactory } from './actions/getCategoryById';
import {
  createCategory,
  createCategoryFactory,
} from './actions/createCategory';
import { editCategory, editCategoryFactory } from './actions/editCategory';

export const extraReducers = (
  builder: ActionReducerMapBuilder<IManageCategoryBottomSheetState>,
) => {
  builder.addCase(getCategoryById.pending, getCategoryByIdFactory.pending);
  builder.addCase(getCategoryById.fulfilled, getCategoryByIdFactory.fulfilled);
  builder.addCase(getCategoryById.rejected, getCategoryByIdFactory.rejected);

  builder.addCase(createCategory.pending, createCategoryFactory.pending);
  builder.addCase(createCategory.fulfilled, createCategoryFactory.fulfilled);
  builder.addCase(createCategory.rejected, createCategoryFactory.rejected);

  builder.addCase(editCategory.pending, editCategoryFactory.pending);
  builder.addCase(editCategory.fulfilled, editCategoryFactory.fulfilled);
  builder.addCase(editCategory.rejected, editCategoryFactory.rejected);
};
