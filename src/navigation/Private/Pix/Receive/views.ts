import ToReceiving from './ToReceiving';
import { RECEIVE } from './constants';

import { Receiving } from '../../../../views/Transaction/Receive';

export default [
  {
    component: Receiving,
    name: RECEIVE.RECEIVE,
  },
  {
    component: ToReceiving,
    name: RECEIVE.TORECEIVING,
  },
];
