import { Dashboard } from '../../views/Dashboard';
import { Home } from '../../views/Home';
import { PUBLIC } from './constants';

export default [
  {
    component: Dashboard,
    name: 'dev',
  },
  {
    component: Home,
    name: PUBLIC.HOME,
  },
];
