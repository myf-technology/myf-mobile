import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import * as reducers from './actions';

export const slice = createSlice({
  name: 'Category List Bottom Sheet',
  initialState,
  reducers,
});

export const { bottomSheetControl } = slice.actions;
