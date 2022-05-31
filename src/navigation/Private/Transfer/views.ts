import Destiny from './Destiny';
import { TRANSFER } from './constants';

import { Transferring } from '../../../views/Transaction/Transferring';

export default [
  {
    component: Transferring,
    name: TRANSFER.TRANSFERRING,
  },
  {
    component: Destiny,
    name: TRANSFER.DESTINY,
  },
];
