import { CONFIRM } from './constants';

import { Dashboard } from '../../../../../views/Dashboard';
import { RechargeConfirm } from '../../../../../views/Recharge/Finalize';

export default [
  {
    component: RechargeConfirm,
    name: CONFIRM.CONFIRM,
  },
  {
    component: Dashboard,
    name: CONFIRM.DASHBOARD,
  },
];
