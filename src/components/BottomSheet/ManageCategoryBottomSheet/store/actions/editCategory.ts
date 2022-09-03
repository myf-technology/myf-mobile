import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { editCategoryService } from '../../services/editCategoryService';
import {
  IEditCategoryPayload,
  IManageCategoryBottomSheetState,
} from '../types';

export const editCategory = createAsyncThunk(
  'manage-category-bottom-sheet/edit-category',
  async (data: IEditCategoryPayload, { rejectWithValue }) => {
    try {
      await editCategoryService(data);
    } catch (error) {
      rejectWithValue({
        message: 'Hmm... não deu pra editar. Tenta aí de novo na moral.',
      });
    }
  },
);

const pending = (state: IManageCategoryBottomSheetState) => {
  state.controls = {
    ...state.controls,
    message: null,
    status: 'pending',
  };
};

const fulfilled = (state: IManageCategoryBottomSheetState) => {
  state.controls = {
    ...state.controls,
    message: null,
    status: 'fulfilled',
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

export const editCategoryFactory = {
  pending,
  fulfilled,
  rejected,
};
