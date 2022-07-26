import { DASHBOARD } from './constants';

import { Icon } from '../../../components/Icon';
import { Dashboard } from '../../../views/Dashboard';
import { Statement } from '../../../views/Statement';

export default [
  {
    name: DASHBOARD.DASHBOARD,
    component: Dashboard,
    Icon: () => <Icon name='Home' fill='white' />
  },
  {
    name: DASHBOARD.WALLET,
    Icon: () => <Icon name='Wallet' fill='white' />,
    component: 'Wallet'
  },
  {
    name: DASHBOARD.TRANSACTIONS,
    Icon: () => <Icon name='Money' fill='red' />,
    component: 'Transactions'
  },
  {
    name: DASHBOARD.STATEMENT,
    Icon: () => <Icon name='Statement' fill='white' />,
    component: Statement
  },
  {
    name: DASHBOARD.PROFILE,
    Icon: () => <Icon name='Person' fill='white' />,
    component: 'Profile'
  }
];
