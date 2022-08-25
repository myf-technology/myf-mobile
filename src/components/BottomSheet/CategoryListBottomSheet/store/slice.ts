import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { reducers, extraReducers } from './reducers';

export const slice = createSlice({
  name: 'Category List Bottom Sheet',
  initialState,
  reducers,
  extraReducers,
});

export const {
  actions: { bottomSheetControl },
  reducer: bottomSheetReducer,
} = slice;
