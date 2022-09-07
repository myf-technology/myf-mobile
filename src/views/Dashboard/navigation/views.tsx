import { DASHBOARD } from './constants';

import { Dashboard } from '..';
import { Icon } from 'react-native-eva-icons';
import { BalanceManager } from '../../BalanceManager';

export default [
  {
    name: DASHBOARD.DASHBOARD,
    component: Dashboard,
    Icon: () => (
      <Icon
        fill="white"
        name="home-outline"
        width={25}
        height={25}
        color="white"
      />
    ),
  },
  {
    name: DASHBOARD.STATEMENT,
    Icon: () => (
      <Icon
        fill="white"
        name="menu-2-outline"
        width={25}
        height={25}
        color="white"
      />
    ),
    component: BalanceManager,
  },
  {
    name: DASHBOARD.WALLET,
    Icon: () => (
      <Icon
        fill="white"
        name="question-mark-outline"
        width={25}
        height={25}
        color="white"
      />
    ),
    component: 'Wallet',
  },
  {
    name: DASHBOARD.PROFILE,
    Icon: () => (
      <Icon
        fill="white"
        name="question-mark-outline"
        width={25}
        height={25}
        color="white"
      />
    ),
    component: 'Profile',
  },
];
