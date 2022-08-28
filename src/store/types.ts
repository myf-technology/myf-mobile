import { IBottomSheetState } from '../components/BottomSheet/CategoryListBottomSheet/store/types';
import { IManageCategoryBottomSheetState } from '../components/BottomSheet/ManageCategoryBottomSheet/store/types';

export interface IStore {
  bottomSheet: IBottomSheetState;
  manageCategoryBottomSheet: IManageCategoryBottomSheetState;
}
