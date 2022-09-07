import { DASHBOARD } from './constants';

import { Dashboard } from '../index.tsx.old';
import { Icon } from '../../../components';
// import { Statement } from '../../../views/Statement';

export default [
  {
    name: DASHBOARD.DASHBOARD,
    component: Dashboard,
    Icon: () => <Icon name="ArrowForward" fill="white" />,
  },
  {
    name: DASHBOARD.WALLET,
    Icon: () => <Icon name="ArrowForward" fill="white" />,
    component: 'Wallet',
  },
  {
    name: DASHBOARD.STATEMENT,
    Icon: () => <Icon name="ArrowForward" fill="white" />,
    component: 'Statment',
  },
  {
    name: DASHBOARD.PROFILE,
    Icon: () => <Icon name="ArrowForward" fill="white" />,
    component: 'Profile',
  },
];
