import Read from './Read';
import { PAY } from './constants';

import { QRcodePay } from '../../../../views/Pix/QRcodePay/MainMenu';
import { PixCopyPaste } from '../../../../views/Pix/QRcodePay/PixCopyPaste';

export default [
  {
    component: QRcodePay,
    name: PAY.PAY,
  },
  {
    component: PixCopyPaste,
    name: PAY.PIX,
  },
  {
    component: Read,
    name: PAY.READ,
  },
];
