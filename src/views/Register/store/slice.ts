import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    name: '',
    email: '',
    password: '',
    token: '',
  },
  reducers: {
    storeEmailName: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    storePassword: (state, action) => {
      state.password = action.payload.password;
    },
  },
});

export const { storeEmailName, storePassword } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
