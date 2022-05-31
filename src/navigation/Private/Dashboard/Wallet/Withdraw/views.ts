import { WITHDRAW } from './constants';

import { Transferring } from '../../../../../views/Transaction/Transferring';
import { Withdraw } from '../../../../../views/Wallet/Withdraw';

export default [
  {
    component: Withdraw,
    name: WITHDRAW.WITHDRAW,
  },
  {
    component: Transferring,
    name: WITHDRAW.ACCOUNT,
  },
  {
    component: Transferring,
    name: WITHDRAW.PIX,
  },
];
