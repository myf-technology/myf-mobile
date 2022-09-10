import { configureStore } from '@reduxjs/toolkit';
import { bottomSheetReducer } from '../components/BottomSheet/CategoryListBottomSheet/store/slice';
import { manageCategoryReducer } from '../components/BottomSheet/ManageCategoryBottomSheet';
import { createBalanceReducer } from '../views/Dashboard/_components/CreateBalanceForm/store/slice';
import { reducerLogin } from '../views/Login/store/slice';

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
    manageCategoryBottomSheet: manageCategoryReducer,
    login: reducerLogin,
    createBalance: createBalanceReducer,
  },
});
