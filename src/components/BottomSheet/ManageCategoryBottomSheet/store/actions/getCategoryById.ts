import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryItem } from '../../../CategoryListBottomSheet/store/types';
import { getCategoryByIdService } from '../../services/getCategoryByIdService';
import {
  IGetCategoryByIdPayload,
  IManageCategoryBottomSheetState,
} from '../types';

export const getCategoryById = createAsyncThunk(
  'manage-category-bottom-sheet/get-category-by-id',
  async ({ categoryId }: IGetCategoryByIdPayload, { rejectWithValue }) => {
    try {
      const { data } = await getCategoryByIdService(categoryId);

      return data;
    } catch (error) {
      rejectWithValue({ message: 'Ops... Tenta de novo aí rapdiinho.' });
    }
  },
);

const pending = (state: IManageCategoryBottomSheetState) => {
  state.controls = {
    message: null,
    status: 'pending',
    visible: true,
  };
};

const fulfilled = (
  state: IManageCategoryBottomSheetState,
  action: PayloadAction<ICategoryItem>,
) => {
  state.category = action.payload;
  state.controls = {
    message: '',
    status: 'fulfilled',
    visible: true,
  };
};

const rejected = (
  state: IManageCategoryBottomSheetState,
  action: PayloadAction<unknown>,
) => {
  const { message } = action.payload as { message: string };

  state.category = null;
  state.controls = {
    message,
    status: 'rejected',
    visible: true,
  };
};

export const getCategoryByIdFactory = {
  pending,
  fulfilled,
  rejected,
};
