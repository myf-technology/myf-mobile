import CustomQR from './CustomQR';
import { TORECEIVING } from './constants';

import { ToReceiving } from '../../../../../views/Transaction/ToReceiving';

export default [
  {
    component: ToReceiving,
    name: TORECEIVING.TORECEIVING,
  },
  {
    component: CustomQR,
    name: TORECEIVING.CUSTOMQR,
  },
];
