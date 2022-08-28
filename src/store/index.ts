import { configureStore } from '@reduxjs/toolkit';
import { bottomSheetReducer } from '../components/BottomSheet/CategoryListBottomSheet/store/slice';
import { manageCategoryReducer } from '../components/BottomSheet/ManageCategoryBottomSheet';

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
    manageCategoryBottomSheet: manageCategoryReducer,
  },
});
