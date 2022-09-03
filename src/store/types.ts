import { IBottomSheetState } from '../components/BottomSheet/CategoryListBottomSheet/store/types';
import { IManageCategoryBottomSheetState } from '../components/BottomSheet/ManageCategoryBottomSheet/store/types';
import { ILoginState } from '../views/Login/store/reducers/types';

export interface IStore {
  bottomSheet: IBottomSheetState;
  manageCategoryBottomSheet: IManageCategoryBottomSheetState;
  login: ILoginState;
}
