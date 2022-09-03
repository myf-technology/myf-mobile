import { configureStore } from '@reduxjs/toolkit';
import { bottomSheetReducer } from '../components/BottomSheet/CategoryListBottomSheet/store/slice';
<<<<<<< HEAD
import { registerReducer } from '../views/Register/store/slice';
=======
import { manageCategoryReducer } from '../components/BottomSheet/ManageCategoryBottomSheet';
>>>>>>> 91fd36f8e0ef8b072b4e0e9cd440f72b3f1c417b

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
<<<<<<< HEAD
    register: registerReducer,
=======
    manageCategoryBottomSheet: manageCategoryReducer,
>>>>>>> 91fd36f8e0ef8b072b4e0e9cd440f72b3f1c417b
  },
});
