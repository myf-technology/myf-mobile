import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { fetchCategoriesByTypeService } from '../../service/fetchCategoryListByType';
import {
  IFetchCategoryListByTypePayload,
  IBottomSheetState,
  ICategoryItem,
} from '../types';

export const fetchCategoryListByTypeAsync = createAsyncThunk(
  'categoryBottomSheet/fetchCategoriesByTypeAsync',
  async (
    { balanceType }: IFetchCategoryListByTypePayload,
    { rejectWithValue },
  ) => {
    try {
      if (!balanceType) {
        throw new Error(
          'missing balanceType while running fetchCategoryListyTypeAsync',
        );
      }

      const { data } = await fetchCategoriesByTypeService(balanceType);

      return data;
    } catch (error) {
      const { message, response } = error as AxiosError;
      return rejectWithValue({
        message,
        response: response?.data,
      });
    }
  },
);

const fetchCategoryListByTypePending = (state: IBottomSheetState) => {
  state.controls = {
    ...state.controls,
    status: 'loading',
    message: null,
    visible: true,
  };
};

const fetchCategoryListByTypeFulfilled = (
  state: IBottomSheetState,
  action: PayloadAction<ICategoryItem[]>,
) => {
  state.list = action.payload;
  state.controls = {
    ...state.controls,
    message: null,
    status: 'fulfilled',
    visible: true,
  };
};

const fetchCategoryListByTypeRejected = (
  state: IBottomSheetState,
  action: PayloadAction<unknown>,
) => {
  if (typeof action.payload !== 'string') {
    throw new Error('type of payload is not a string.');
  }

  state.controls = {
    ...state.controls,
    message: action.payload,
    status: 'rejected',
    visible: true,
  };
};

export const fetchCategoryListByTypeFactory = {
  fetchCategoryListByTypePending,
  fetchCategoryListByTypeFulfilled,
  fetchCategoryListByTypeRejected,
};
