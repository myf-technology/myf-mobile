import { configureStore } from '@reduxjs/toolkit';
import { bottomSheetReducer } from '../components/BottomSheet/CategoryListBottomSheet/store/slice';
import { registerReducer } from '../views/Register/store/slice';

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
    register: registerReducer,
  },
});
