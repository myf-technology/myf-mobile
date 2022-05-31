import Price from './Price';
import { MOBILE } from './constants';

import { MobileCredit } from '../../../views/Recharge/MainPage';

export default [
  {
    component: MobileCredit,
    name: MOBILE.CREDIT,
  },
  {
    component: Price,
    name: MOBILE.PRICE,
  },
];
