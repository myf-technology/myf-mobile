import Key from './Key';
import Pay from './Pay';
import Receive from './Receive';
import { PIX } from './constants';

import { Area } from '../../../views/Pix/Area';
import { PixLimit } from '../../../views/Pix/PixLimit';
import Transfer from '../Transfer';

export default [
  {
    component: Area,
    name: PIX.AREA,
  },
  {
    component: PixLimit,
    name: PIX.LIMIT,
  },
  {
    component: Key,
    name: PIX.KEYS,
  },
  {
    component: Pay,
    name: PIX.PAY,
  },
  {
    component: Transfer,
    name: PIX.TRANSFER,
  },
  {
    component: Receive,
    name: PIX.RECEIVE,
  },
];
