import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createBalanceService,
  ICreateBalanceServiceParams,
} from '../service/createBalanceService';

export const createBalance = createAsyncThunk(
  'createBalanceForm/createBalance',
  async (payload: ICreateBalanceServiceParams, { rejectWithValue }) => {
    console.log(payload);
    try {
      await createBalanceService(payload);

      return { message: 'Balance Enviado' };
    } catch (error) {
      console.log(error.response.data);

      return rejectWithValue({ message: 'erro ao criar o balance' });
    }
  },
);

const createBalanceFormSlice = createSlice({
  name: 'create-balance-form',
  initialState: {
    controls: {
      status: null as string | null,
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
    builder.addCase(createBalance.fulfilled, (state, action) => {
      state.controls = { status: 'fulfilled', message: action.payload.message };
    });

    builder.addCase(createBalance.rejected, (state, action) => {
      const { message } = action.payload as { message: string };
      state.controls = { status: 'rejected', message };
    });

    builder.addCase(createBalance.pending, state => {
      state.controls = { status: 'pending', message: null };
    });
  },
});

export const createBalanceReducer = createBalanceFormSlice.reducer;

export const { selectCategory } = createBalanceFormSlice.actions;
