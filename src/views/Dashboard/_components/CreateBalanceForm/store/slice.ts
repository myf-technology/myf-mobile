import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createBalanceService,
  ICreateBalanceServiceParams,
} from '../service/createBalanceService';

export const createBalance = createAsyncThunk(
  'createBalanceForm/createBalance',
  async (payload: ICreateBalanceServiceParams, { rejectWithValue }) => {
    try {
      const res = await createBalanceService(payload);

      return res.status;
    } catch (error) {
      return rejectWithValue({ message: 'erro ao criar o balance' });
    }
  },
);

const createBalanceFormSlice = createSlice({
  name: 'create-balance-form',
  initialState: {
    controls: {
      state: null as string | null,
      message: null as string | null,
    },
    selectedCategory: {
      name: null,
      categoryId: null,
      balanceType: null,
    },
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createBalance.fulfilled, state => {
      state.controls = { state: 'fulfilled', message: null };
    });

    builder.addCase(createBalance.rejected, (state, action) => {
      const { message } = action.payload as { message: string };
      state.controls = { state: 'rejected', message };
    });

    builder.addCase(createBalance.pending, state => {
      state.controls = { state: 'pending', message: null };
    });
  },
});

export const createBalanceReducer = createBalanceFormSlice.reducer;

export const { selectCategory } = createBalanceFormSlice.actions;
