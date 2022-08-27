import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { BalanceType } from '../../../../../types/balanceType';
import { fetchCategoriesByTypeService } from '../../service/fetchCategoryListByTypeService';
import {
  IFetchCategoryListByTypePayload,
  IBottomSheetState,
  IFetchCategoryListByTypeFulfilledPayload,
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

      return { data, balanceType };
    } catch (error) {
      const { response } = error as AxiosError<{ message: string }>;

      return rejectWithValue({ message: response?.data.message, balanceType });
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
  action: PayloadAction<IFetchCategoryListByTypeFulfilledPayload>,
) => {
  state.list = action.payload.data;
  state.controls = {
    ...state.controls,
    balanceType: action.payload.balanceType,
    message: null,
    status: 'fulfilled',
    visible: true,
  };
};

const fetchCategoryListByTypeRejected = (
  state: IBottomSheetState,
  action: PayloadAction<unknown>,
) => {
  const { balanceType, message } = action.payload as unknown as {
    message: string;
    balanceType: BalanceType;
  };

  state.list = [];

  state.controls = {
    ...state.controls,
    status: 'rejected',
    visible: true,
    balanceType,
    message,
  };
};

export const fetchCategoryListByTypeFactory = {
  fetchCategoryListByTypePending,
  fetchCategoryListByTypeFulfilled,
  fetchCategoryListByTypeRejected,
};
