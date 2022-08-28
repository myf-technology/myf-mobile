import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { extraReducers } from './extraReducers';
import { initialState } from './initialState';

const manageCategoryBottomSheetSlice = createSlice({
  name: 'create-category-bottom-sheet',
  initialState,
  reducers,
  extraReducers,
});

export const {
  actions: {},
} = manageCategoryBottomSheetSlice;
