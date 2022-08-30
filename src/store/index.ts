import { configureStore } from '@reduxjs/toolkit';
import { bottomSheetReducer } from '../components/BottomSheet/CategoryListBottomSheet/store/slice';
import { reducerLogin } from '../views/Login/store/slice';

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
    login: reducerLogin,
  },
});
