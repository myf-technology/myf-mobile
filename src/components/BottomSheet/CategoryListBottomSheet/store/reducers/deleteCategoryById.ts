import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IStore } from '../../../../../store/types';
import { deleteCategoryByIdService } from '../../service/deleteCategoryByIdService';
import { fetchCategoriesByTypeService } from '../../service/fetchCategoryListByTypeService';
import { IBottomSheetState, ICategoryItem } from '../types';

export const deleteCategoryByIdAsync = createAsyncThunk(
  'categoryListBottomSheet/deleteCategoryByIdAsync',
  async (categoryId: string, { rejectWithValue, getState }) => {
    try {
      await deleteCategoryByIdService(categoryId);

      const {
        bottomSheet: {
          controls: { balanceType },
        },
      } = getState() as IStore;

      if (!balanceType) {
        throw new Error('Balance type was not provided.');
      }

      const { data } = await fetchCategoriesByTypeService(balanceType);

      return data;
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  },
);

const deleteCategoryByIdPending = (state: IBottomSheetState) => {
  state.controls = {
    ...state.controls,
    message: null,
    status: 'loading',
    visible: true,
  };
};

const deleteCategoryByIdFulfilled = (
  state: IBottomSheetState,
  action: PayloadAction<ICategoryItem[]>,
) => {
  state.controls.status = 'fulfilled';
  state.list = action.payload;
};

const deleteCategoryByIdRejected = (state: IBottomSheetState) => {
  state.controls.status = 'rejected';
};

export const deleteCategoryByIdFactory = {
  fulfilled: deleteCategoryByIdFulfilled,
  rejected: deleteCategoryByIdRejected,
  pending: deleteCategoryByIdPending,
};
