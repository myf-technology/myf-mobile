import { CONFIRM } from './constants';

import { Confirm } from '../../../../../../views/Transaction/Confirm';
import { Receipt } from '../../../../../../views/Transaction/Receipt';

export default [
  {
    component: Confirm,
    name: CONFIRM.CONFIRM,
  },
  {
    component: Receipt,
    name: CONFIRM.RECEIPT,
  },
];
