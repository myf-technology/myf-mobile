import BalancePayment from './BalancePayment';
import { FORM } from './constants';

import { PaymentForm } from '../../../../../views/Transaction/BilletPay/PaymentForm';

export default [
  {
    component: PaymentForm,
    name: FORM.FORM,
  },
  {
    component: BalancePayment,
    name: FORM.BALANCEPAYMENT,
  },
];
