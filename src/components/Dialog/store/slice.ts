import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'Dialog',
  initialState: {
    controls: {
      visible: false,
      message: null,
    },
  },
  reducers: {
    dialogController: (state, action) => {
      state.controls.message = action.payload.message;
      state.controls.visible = action.payload.visible;
    },
  },
});

export const dialogReducer = dialogSlice.reducer;

export const { dialogController } = dialogSlice.actions;
