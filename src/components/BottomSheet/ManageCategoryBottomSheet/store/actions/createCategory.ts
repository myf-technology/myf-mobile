import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createCategoryService } from '../../services/createCategoryService';
import {
  ICategoryRequestBody,
  IManageCategoryBottomSheetState,
} from '../types';

export const createCategory = createAsyncThunk(
  'manage-category-bottom-sheet/create-category',
  async (categoryData: ICategoryRequestBody, { rejectWithValue }) => {
    try {
      await createCategoryService(categoryData);
    } catch (error) {
      rejectWithValue({
        message:
          'Hmm... a gente não conseguiu criar uma categoria. Foi mal. Quer tentar de novo?',
      });
    }
  },
);

const pending = (state: IManageCategoryBottomSheetState) => {
  state.controls = {
    ...state.controls,
    status: 'pending',
    message: null,
  };
};

const fulfilled = (state: IManageCategoryBottomSheetState) => {
  state.controls = {
    ...state.controls,
    status: 'fulfilled',
    message: null,
    visible: false,
  };
};

const rejected = (
  state: IManageCategoryBottomSheetState,
  action: PayloadAction<unknown>,
) => {
  const { message } = action.payload as { message: string };

  state.controls = {
    ...state.controls,
    message,
    status: 'rejected',
  };
};

export const createCategoryFactory = {
  pending,
  fulfilled,
  rejected,
};
