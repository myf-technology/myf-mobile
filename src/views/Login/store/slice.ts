import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { reducers, extraReducers } from './reducers';

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers,
  extraReducers,
});

export const reducerLogin = loginSlice.reducer;
