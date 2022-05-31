import Dashboard from './Dashboard';
import Mobile from './Mobile';
import PayMethods from './PayMethods';
import Pix from './Pix';
import Transfer from './Transfer';
import { PRIVATE } from './constants';

import { FinancePassword } from '../../views/Transaction/FinancePassword';

export default [
  {
    component: Dashboard,
    name: PRIVATE.DASHBOARD,
  },
  {
    component: Mobile,
    name: PRIVATE.MOBILE,
  },
  {
    component: Pix,
    name: PRIVATE.PIX,
  },
  {
    component: PayMethods,
    name: PRIVATE.PAYMETHODS,
  },
  {
    component: Transfer,
    name: PRIVATE.TRANSFER,
  },
];
