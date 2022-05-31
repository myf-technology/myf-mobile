import { CONFIG } from './constants';

import { AccountConfig } from '../../../../../views/Profile/accountConfig/MainPage';
import { Fees } from '../../../../../views/Profile/accountConfig/fees';
import { Permissions } from '../../../../../views/Profile/accountConfig/permission';
import { Privacy } from '../../../../../views/Profile/accountConfig/privacy';
import { Terms } from '../../../../../views/Profile/accountConfig/terms';

export default [
  {
    component: AccountConfig,
    name: CONFIG.CONFIG,
  },
  {
    component: Fees,
    name: CONFIG.FEES,
  },
  {
    component: Terms,
    name: CONFIG.TERMS,
  },
  {
    component: Privacy,
    name: CONFIG.PRIVACY,
  },
  {
    component: Permissions,
    name: CONFIG.PERMISSION,
  },
];
