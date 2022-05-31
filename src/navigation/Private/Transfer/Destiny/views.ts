import { DESTINY } from './constants';

import { TransferDestiny } from '../../../../views/Transaction/Destiny';
import Confirm from '../../Pix/Pay/Read/Confirm';

export default [
  {
    component: TransferDestiny,
    name: DESTINY.DESTINY,
  },
  {
    component: Confirm,
    name: DESTINY.CONFIRM,
  },
];
