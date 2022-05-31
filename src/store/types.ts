import { IAuth } from './reducers/auth/types';
import { RegisterCompanyRootState } from './reducers/company/types';
import { userRootState } from './reducers/user/types';

export interface Store {
  auth: IAuth;
  user: userRootState;
  company: RegisterCompanyRootState;
}
