import PaymentForm from './PaymentForm';
import { MANUALLY } from './constants';

import { ManuallyType } from '../../../../views/Transaction/BilletPay/ManuallyType';

export default [
  {
    component: ManuallyType,
    name: MANUALLY.MANUALLY,
  },
  {
    component: PaymentForm,
    name: MANUALLY.FORM,
  },
];
