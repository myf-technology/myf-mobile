import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ILoginServiceProps, loginService } from '../../service/loginService';
import { ILoginState } from './types';
import asyncStorage from '@react-native-async-storage/async-storage';

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async (loginData: ILoginServiceProps, { rejectWithValue }) => {
    try {
      const res = await loginService(loginData);
      const { token } = res.data.data;
      const bearerToken = token.split(' ')[1];

      asyncStorage.setItem('@bearer_token', bearerToken);

      return res.data;
    } catch (error) {
      return rejectWithValue('Nenhuma conta encontrada com os dados');
    }
  },
);

export const loginPending = (state: ILoginState) => {
  state.controls.state = 'pending';
};

export const loginFulfilled = (state: ILoginState) => {
  state.controls.state = 'fulfilled';
};

export const loginRejected = (
  state: ILoginState,
  action: PayloadAction<unknown>,
) => {
  state.controls.state = 'rejected';
  state.controls.message = action.payload as string;
};

export const loginFactory = {
  loginFulfilled,
  loginPending,
  loginRejected,
};
