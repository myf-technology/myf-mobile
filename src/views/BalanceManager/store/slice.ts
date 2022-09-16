import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBalanceListService } from '../service/getBalanceListService';
import { BalanceListProps } from '../types';

export const fetchBalanceList = createAsyncThunk(
  'balanceManager/fetchBalanceList',
  async (_, thunkAPI) => {
    try {
      const res = await getBalanceListService();

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'nao foi possivel',
      });
    }
  },
);

const balanceManagerSlice = createSlice({
  name: 'balance-manager',

  initialState: {
    controls: {
      message: null as string | null,
      state: null as string | null,
    },
    balanceList: [] as BalanceListProps[],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBalanceList.fulfilled, (state, action) => {
      state.balanceList = action.payload;
      state.controls = { state: 'fulfilled', message: null };
    });
    builder.addCase(fetchBalanceList.rejected, (state, action) => {
      const { message } = action.payload as { message: string };
      state.controls = {
        state: 'rejected',
        message: message,
      };
    });
    builder.addCase(fetchBalanceList.pending, state => {
      state.controls = { state: 'pending', message: null };
    });
  },
});

export const balanceManagerReducer = balanceManagerSlice.reducer;
