import Confirm from './Confirm';
import { PRICE } from './constants';

import { SelectPrice } from '../../../../views/Recharge/Products';

export default [
  {
    component: SelectPrice,
    name: PRICE.PRICE,
  },
  {
    component: Confirm,
    name: PRICE.CONFIRM,
  },
];
