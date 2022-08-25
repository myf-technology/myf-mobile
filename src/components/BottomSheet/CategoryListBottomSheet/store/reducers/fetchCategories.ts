import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { fetchCategoryList } from '../../service/fetchCategoryList';
import { IBottomSheetState, ICategoryItem } from '../types';

const fetchCategoriesPending = (state: IBottomSheetState) => {
  state.controls.status = 'loading';
};

export const fetchCategoryListAsync = createAsyncThunk(
  'CategoryBottomSheet/fetchCategoryListAsync',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchCategoryList();
      console.log(data);

      return data;
    } catch (error) {
      const { response } = error as AxiosError;

      return rejectWithValue(response?.data);
    }
  },
);

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

export const fetchCategoriesFactory = {
  fetchCategoriesPending,
  fetchCategoriesFullfilled,
  fetchCategoriesRejected,
};
