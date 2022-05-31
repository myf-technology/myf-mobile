import AccountConfig from './AccountConfig';
import Help from './Help';
import Safety from './Safety';
import { PROFILE } from './constants';

import { Profile } from '../../../../views/Profile/ProfileField';
import { DisableAccount } from '../../../../views/Profile/desable';
import { RegistrationData } from '../../../../views/Profile/registrationData';

export default [
  {
    component: Profile,
    name: PROFILE.PROFILE,
  },
  {
    component: RegistrationData,
    name: PROFILE.DATA,
  },
  {
    component: AccountConfig,
    name: PROFILE.CONFIG,
  },
  {
    component: Safety,
    name: PROFILE.SAFETY,
  },
  {
    component: Help,
    name: PROFILE.HELP,
  },
  {
    component: DisableAccount,
    name: PROFILE.DISABLE,
  },
];
