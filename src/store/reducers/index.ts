import { combineReducers } from 'redux';

import auth from './auth/reducer';
import balance from './balance/reducer';
import company from './company/reducer';
import payment from './payment/reducer';
import recharge from './recharge/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  company,
  balance,
  payment,
  recharge,
});
