import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  loginAsync,
  loginFulfilled,
  loginPending,
  loginRejected,
} from './login';
import { ILoginState } from './types';
import { verifyEmailAsync, verifyEmailFactory } from './verifyEmail';

const { verifyEmailFulfilled, verifyEmailPending, verifyEmailRejected } =
  verifyEmailFactory;

export const reducers = {};

export const extraReducers = (
  builder: ActionReducerMapBuilder<ILoginState>,
) => {
  builder.addCase(verifyEmailAsync.pending, verifyEmailPending);
  builder.addCase(verifyEmailAsync.fulfilled, verifyEmailFulfilled);
  builder.addCase(verifyEmailAsync.rejected, verifyEmailRejected);

  builder.addCase(loginAsync.pending, loginPending);
  builder.addCase(loginAsync.fulfilled, loginFulfilled);
  builder.addCase(loginAsync.rejected, loginRejected);
};
