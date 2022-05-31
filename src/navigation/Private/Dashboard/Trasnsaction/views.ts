// import Bill from './Bill';
// import Destiny from './Destiny';
// import { DESTINY } from './Destiny/constants';
import { TRANSACTION } from './constants';

import { Transactions } from '../../../../views/Transaction/MainPage';
import PayMethods from '../../PayMethods';

export default [
  {
    component: Transactions,
    name: TRANSACTION.TRANSACTION,
  },
  // {
  //   component: Destiny,
  //   name: DESTINY.DESTINY,
  // },
  {
    component: PayMethods,
    NAME: TRANSACTION.PAYMETHODS,
  },
];
