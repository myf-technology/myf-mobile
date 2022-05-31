import { SCANNER } from './constants';

import { Scanner } from '../../../../views/Transaction/BilletPay/Scanner';
import Manually from '../Manually';

export default [
  {
    component: Scanner,
    name: SCANNER.SCANNER,
  },
  {
    component: Manually,
    name: SCANNER.MANUALLY,
  },
];
