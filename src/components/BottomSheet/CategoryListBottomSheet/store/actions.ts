import { CaseReducer, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { fetchCategoryList } from '../../../../services/fetchCategoryList';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  IBottomSheetControlPayload,
  IBottomSheetState,
  ICategoryItem,
} from './types';

const bottomSheetControl: CaseReducer<
  IBottomSheetState,
  PayloadAction<IBottomSheetControlPayload>
> = (state, action) => {
  state.controls.visible = action.payload.visible;
  state.controls.status = null;
};

const fetchCategoriesPending = (state: IBottomSheetState) => {
  state.controls.status = 'loading';
};

const fetchCategoriesFullfilled = (
  state: IBottomSheetState,
  action: PayloadAction<ICategoryItem[]>,
) => {
  state.list = action.payload;

  state.controls = {
    ...state.controls,
    message: '',
    status: 'fulfilled',
  };
};

const fetchCategoriesRejected = (
  state: IBottomSheetState,
  action: PayloadAction<unknown>,
) => {
  state.controls.status = 'rejected';

  if (typeof action.payload === 'string') {
    state.controls.message = action.payload;
  } else {
    console.log(
      'action.payload is not a string at BottomSheet fetchCategoriesRejected',
    );
  }
};

export const fetchCategoryListThunk = createAsyncThunk(
  'bottomsheet/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchCategoryList();

      return data;
    } catch (error) {
      const { response } = error as AxiosError;

      return rejectWithValue(response?.data);
    }
  },
);

export const reducers = {
  bottomSheetControl,
};

export const extraReducers = (
  builder: ActionReducerMapBuilder<IBottomSheetState>,
) => {
  builder.addCase(fetchCategoryListThunk.pending, fetchCategoriesPending);
  builder.addCase(fetchCategoryListThunk.fulfilled, fetchCategoriesFullfilled);
  builder.addCase(fetchCategoryListThunk.rejected, fetchCategoriesRejected);
};
