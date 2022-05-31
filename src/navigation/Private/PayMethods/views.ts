import Manually from './Manually';
import Scanner from './Scanner';
import { PAYMETHODS } from './constants';

import { PayMethods } from '../../../views/Transaction/BilletPay/PayMethods';

export default [
  {
    component: PayMethods,
    name: PAYMETHODS.PAYMETHODS,
  },
  {
    component: Scanner,
    name: PAYMETHODS.SCANNER,
  },
  {
    component: Manually,
    name: PAYMETHODS.MANUALLY,
  },
];
