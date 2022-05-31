import Receipt from './Receipt';
import { BALANCEPAYMENT } from './constants';

import { BalancePayment } from '../../../../../../views/Transaction/BilletPay/BalancePayment';

export default [
  {
    component: BalancePayment,
    name: BALANCEPAYMENT.BALANCEPAYMENT,
  },
  {
    component: Receipt,
    name: BALANCEPAYMENT.RECEIPT,
  },
];
