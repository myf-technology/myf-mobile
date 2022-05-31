import { SAFETY } from './constants';

import { ChangeAddress } from '../../../../../views/Profile/safety/ChangeAddress';
import { Safety } from '../../../../../views/Profile/safety/MainPage';
import { PasswordReset } from '../../../../../views/Profile/safety/PasswordReset';

export default [
  {
    component: Safety,
    name: SAFETY.SAFETY,
  },
  {
    component: PasswordReset,
    name: SAFETY.RESET,
  },
  {
    component: ChangeAddress,
    name: SAFETY.UPDATE,
  },
];
