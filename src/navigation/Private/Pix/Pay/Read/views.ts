import Confirm from './Confirm';
import { READ } from './constants';

import { QRreader } from '../../../../../views/Pix/QRcodePay/QRreader';

export default [
  {
    component: QRreader,
    name: READ.READ,
  },
  {
    component: Confirm,
    name: READ.CONFIRM,
  },
];
