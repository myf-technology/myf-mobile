import { Dashboard } from '../../views/Dashboard';
import { Home } from '../../views/Home';
import { Login } from '../../views/Login';
import { NameEmail } from '../../views/Register/EmailName';
import { Password } from '../../views/Register/Password';
import { VerifyEmail } from '../../views/Register/VerifyEmail';
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
  {
    component: Login,
    name: PUBLIC.LOGIN,
  },
  {
    component: NameEmail,
    name: PUBLIC.NAMEEMAIL,
  },
  {
    component: Password,
    name: PUBLIC.CREATEPASSWORD,
  },
  {
    component: VerifyEmail,
    name: PUBLIC.VERIFY,
  },
];
