import QRcode from './QRcode';
import Withdraw from './Withdraw';
import { WALLET } from './constants';

import { Area } from '../../../../views/Pix/Area';
import { Balance } from '../../../../views/Wallet/Balance';
import { Wallet } from '../../../../views/Wallet/MainMenu';

export default [
  {
    component: Wallet,
    name: WALLET.WALLET,
  },
  {
    component: Withdraw,
    name: WALLET.WITHDRAW,
  },
  {
    component: Area,
    name: WALLET.PIX,
  },
  {
    component: Balance,
    name: WALLET.BALANCE,
  },
  {
    component: QRcode,
    name: WALLET.QRCODE,
  },
];
