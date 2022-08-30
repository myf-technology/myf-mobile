import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { verifyEmailService } from '../../service/verifyEmailService';
import { ILoginState, IVerifyEmailAsyncPayload } from './types';

export const verifyEmailAsync = createAsyncThunk(
  'login/verifyEmailAsync',
  async (payload: IVerifyEmailAsyncPayload, { rejectWithValue }) => {
    try {
      await verifyEmailService(payload.email);

      return { isValidEmail: true };
    } catch (error) {
      const { message } = error as { message: string };
      return rejectWithValue(message);
    }
  },
);

const verifyEmailPending = (state: ILoginState) => {
  state.controls.state = 'pending';
};

const verifyEmailRejected = (
  state: ILoginState,
  action: PayloadAction<unknown>,
) => {
  state.controls.state = 'rejected';
  state.controls.message = action.payload as string;
};

const verifyEmailFulfilled = (state: ILoginState) => {
  state.controls.state = 'fulfilled';
};

export const verifyEmailFactory = {
  verifyEmailPending,
  verifyEmailFulfilled,
  verifyEmailRejected,
};
