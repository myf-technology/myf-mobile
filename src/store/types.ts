import { IBottomSheetState } from '../components/BottomSheet/CategoryListBottomSheet/store/types';
import { ILoginState } from '../views/Login/store/reducers/types';

export interface IStore {
  bottomSheet: IBottomSheetState;
  login: ILoginState;
}
