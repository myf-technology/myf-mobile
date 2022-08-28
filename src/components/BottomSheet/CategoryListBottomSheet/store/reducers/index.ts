import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IBottomSheetState } from '../types';
import {
  fetchCategoriesFactory,
  fetchCategoryListAsync,
} from './fetchCategories';
import { bottomSheetReducerFactory } from './bottomSheetControl';
import {
  fetchCategoryListByTypeAsync,
  fetchCategoryListByTypeFactory,
} from './fetchCategoryListByType';
import {
  deleteCategoryByIdAsync,
  deleteCategoryByIdFactory,
} from './deleteCategoryById';

const {
  fetchCategoriesFullfilled,
  fetchCategoriesPending,
  fetchCategoriesRejected,
} = fetchCategoriesFactory;

const {
  fetchCategoryListByTypeFulfilled,
  fetchCategoryListByTypePending,
  fetchCategoryListByTypeRejected,
} = fetchCategoryListByTypeFactory;

export const reducers = {
  ...bottomSheetReducerFactory,
};

export const extraReducers = (
  builder: ActionReducerMapBuilder<IBottomSheetState>,
) => {
  builder.addCase(fetchCategoryListAsync.pending, fetchCategoriesPending);
  builder.addCase(fetchCategoryListAsync.fulfilled, fetchCategoriesFullfilled);
  builder.addCase(fetchCategoryListAsync.rejected, fetchCategoriesRejected);

  builder.addCase(
    fetchCategoryListByTypeAsync.pending,
    fetchCategoryListByTypePending,
  );
  builder.addCase(
    fetchCategoryListByTypeAsync.fulfilled,
    fetchCategoryListByTypeFulfilled,
  );
  builder.addCase(
    fetchCategoryListByTypeAsync.rejected,
    fetchCategoryListByTypeRejected,
  );

  builder.addCase(
    deleteCategoryByIdAsync.pending,
    deleteCategoryByIdFactory.pending,
  );
  builder.addCase(
    deleteCategoryByIdAsync.fulfilled,
    deleteCategoryByIdFactory.fulfilled,
  );
  builder.addCase(
    deleteCategoryByIdAsync.rejected,
    deleteCategoryByIdFactory.rejected,
  );
};
